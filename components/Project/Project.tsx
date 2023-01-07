import Image from "next/image";
import React, {useId} from 'react'
import Tag from "./Tag";

type Project = {
    image: string,
    title: string,
    website_url: string,
    description: string,
    tags?: any,
}
const Project = (project: Project) => {
    const id = useId();

    return (
        <div
            key={id}
            className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800
                duration-300 hover:-translate-y-1">
            <figure>
                <Image src={project.image}
                       className="rounded-t h-72 w-full object-cover" alt="Me" width="600" height="600"/>

                <figcaption className="p-4">
                    <p
                        className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                        {project.title}

                    </p>

                    <small
                        className="leading-5 text-gray-500 dark:text-gray-400">
                        {project.description}

                    </small>
                    {project.tags.map((tag: any, index: React.Key | null | undefined) => (
                        <Tag key={index}>
                            {tag}
                        </Tag>
                    ))}
                </figcaption>
            </figure>
        </div>
    )
}
export default Project;