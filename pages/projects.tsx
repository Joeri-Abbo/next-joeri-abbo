import Head from 'next/head'
import Layout from "../sections/Layout";
import Projects from "../components/Project/Projects";
import i18n from "i18next";

export default function Home() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Projects | Joeri Abbo</title>
                    <meta name="description" content="Een pad van UX developer naar Devops en Cloud engineer"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main className="">
                    <Projects src={"/rest/" + i18n.language + "/projects.json"}/>
                </main>
            </Layout>
        </>
    )
}
