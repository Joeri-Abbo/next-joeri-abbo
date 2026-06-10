import {useTranslation} from "react-i18next";
import Image from "next/image";
import Layout from "../sections/Layout";
import Seo from "../components/Seo";
import CenterButton from "../components/Utilities/CenterButton";

export default function FourOFour() {
    const {t} = useTranslation();

    return (
        <Layout>
            <Seo title={t('meta.notFound.title')} description={t('meta.notFound.description')}/>
            <main>
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-2 text-6xl font-bold text-blue-500">404</h1>
                    <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                        {t('notFound.message')}
                    </p>
                    <Image src="/memes/meme2.png" className="mb-8 rounded-lg" alt="404" width="600" height="600"/>
                    <CenterButton href="/">
                        {t('notFound.backHome')}
                    </CenterButton>
                </div>
            </main>
        </Layout>
    )
}
