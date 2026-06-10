import {useTranslation} from "react-i18next";
import Layout from "../sections/Layout";
import Seo from "../components/Seo";
import Timeline from "../components/Timeline/Timeline";
import SectionTitle from "../components/Utilities/SectionTitle";

export default function TimelinePage() {
    const {t, i18n} = useTranslation();

    return (
        <Layout>
            <Seo title={t('meta.timeline.title')} description={t('meta.timeline.description')} path="/timeline"/>
            <main>
                <SectionTitle subtitle={t('sections.experienceSubtitle')}>
                    {t('sections.experienceTitle')}
                </SectionTitle>
                <Timeline src={"/rest/" + i18n.language + "/timeline.json"}/>
            </main>
        </Layout>
    )
}
