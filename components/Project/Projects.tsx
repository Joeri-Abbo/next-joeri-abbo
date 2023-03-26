import {useEffect, useState} from "react";
import Col3 from "../Utilities/Col3";
import Project from "./Project";
import Type from "./Type";

type Props = {
    src: string
};

const Projects = (props: Props) => {

    const [projects, setProjects] = useState<Type[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!loading) {
            setLoading(true)
            fetch(props.src, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setProjects(data)
                })
        }
    }, [loading, projects, props.src]);

    return (
        <Col3>
            {projects.length > 0 ? (
                projects.map((project: Type, index) => (
                    <Project tags={project.tags} description={project.description} image={project.image}
                             title={project.title} href={project.href} key={index}/>
                ))
            ) : (
                <div>No projects to display</div>
            )}
        </Col3>
    )
}
export default Projects;