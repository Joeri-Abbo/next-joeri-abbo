import {useEffect, useState} from "react";
import Col3 from "../Utilities/Col3";
import Project from "./Project";
import Type from "./Type";

type Props = {
    src: string,
    amount: number,
};

const Projects = (props: Props) => {

    const [projects, setProjects] = useState({});
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

            {/*@ts-ignore*/}
            {projects && Object.keys(projects).length > 0 && projects.map((project: Type, index) => (
                <Project tags={project.tags} description={project.description} image={project.image}
                         title={project.title} href={project.href} key={index}/>
            ))}
        </Col3>
    )
}
export default Projects;