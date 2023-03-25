import Image from "next/image";
import React, {useId} from 'react'
import ProjectType from "./ProjectType";
import Tags from "./Tags";

const Project = (project: ProjectType) => {
    const id = useId();

    return (
        <a key={id} href={project.href}
           className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800
                duration-300 hover:-translate-y-1">
            <figure>
                <div className="relative">
                    <Image src={project.image}
                           className="rounded-t w-full" alt="Me" width="600" height="600"/>
                    <div className="absolute bottom-0 m-auto w-full">
                        <Tags tags={project.tags}/>
                    </div>
                </div>
 
                <figcaption className="p-4">
                    <p
                        className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                        {project.title}
                    </p>
                    <small
                        className="leading-5 text-gray-500 dark:text-gray-400">
                        {project.description}

                    </small>
                </figcaption>
            </figure>
        </a>
    )
}
export default Project;