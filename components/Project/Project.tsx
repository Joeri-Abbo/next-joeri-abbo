import Image from "next/image";
import React from 'react'
import Type from "./Type";
import Tags from "./Utilities/Tags";

const Project = (project: Type) => {
    const external = project.href.startsWith('http');
    const clickable = project.href && project.href !== '#';

    return (
        <a href={project.href}
           target={external ? '_blank' : undefined}
           rel={external ? 'noopener noreferrer' : undefined}
           className={"group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 " + (clickable ? "" : "pointer-events-none")}>
            <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={project.image}
                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                       alt={project.title} width="600" height="600"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {project.description}
                </p>
                <Tags tags={project.tags}/>
            </div>
        </a>
    )
}
export default Project;
