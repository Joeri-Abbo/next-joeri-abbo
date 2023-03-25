import Image from "next/image";
import React, {useId} from 'react'
import Type from "./Type";
import Tags from "./Utilities/Tags";

const Project = (project: Type) => {
    const id = useId();

    return (
        <a key={id} href={project.href}
           className="my-8 rounded bg-white shadow-lg shadow-gray-200 duration-300 hover:-translate-y-1 dark:bg-gray-800 dark:shadow-gray-900">
            <figure>
                <div className="relative">
                    <Image src={project.image}
                           className="w-full rounded-t" alt="Me" width="600" height="600"/>
                    <div className="absolute bottom-0 m-auto w-full">
                        <Tags tags={project.tags}/>
                    </div>
                </div>
 
                <figcaption className="p-4">
                    <p
                        className="mb-4 text-lg font-bold leading-relaxed text-gray-800 dark:text-gray-300">
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