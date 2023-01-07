import {useEffect, useState} from "react";
import Col4 from "../Utilities/Col4";
import Project from "./Project";

type Props = {
    src: string,
    amount: number,
};

type ProjectType = {
    image: string,
    title: string,
    website_url: string,
    description: string,
    tags?: any,
}
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
        <Col4>
            {/*@ts-ignore*/}
            {projects && Object.keys(projects).length > 0 && projects.map((project: ProjectType, index) => (
                <Project tags={project.tags} description={project.description} image={project.image}
                         title={project.title} website_url={project.website_url} key={index}/>
            ))}
        </Col4>
    )
}
export default Projects;