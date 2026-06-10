import {useTranslation} from "react-i18next";
import Layout from "../sections/Layout";
import Seo from "../components/Seo";
import Projects from "../components/Project/Projects";
import SectionTitle from "../components/Utilities/SectionTitle";

export default function ProjectsPage() {
    const {t, i18n} = useTranslation();

    return (
        <Layout>
            <Seo title={t('meta.projects.title')} description={t('meta.projects.description')} path="/projects"/>
            <main>
                <SectionTitle subtitle={t('sections.projectsSubtitle')}>
                    {t('sections.projectsTitle')}
                </SectionTitle>
                <Projects src={"/rest/" + i18n.language + "/projects.json"}/>
            </main>
        </Layout>
    )
}
