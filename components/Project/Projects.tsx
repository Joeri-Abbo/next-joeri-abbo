import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Col3 from "../Utilities/Col3";
import Project from "./Project";
import Type from "./Type";

type Props = {
    src: string
};

const Projects = (props: Props) => {
    const {t} = useTranslation();
    const [projects, setProjects] = useState<Type[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;
        setLoading(true);
        fetch(props.src, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (active) {
                    setProjects(data);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
                if (active) setLoading(false);
            });
        return () => {
            active = false;
        };
    }, [props.src]);

    if (loading && projects.length === 0) {
        return <p className="py-8 text-center text-gray-500 dark:text-gray-400">{t('projects.loading')}</p>;
    }

    if (projects.length === 0) {
        return <p className="py-8 text-center text-gray-500 dark:text-gray-400">{t('projects.empty')}</p>;
    }

    return (
        <Col3>
            {projects.map((project: Type, index) => (
                <Project tags={project.tags} description={project.description} image={project.image}
                         title={project.title} href={project.href} key={index}/>
            ))}
        </Col3>
    )
}
export default Projects;