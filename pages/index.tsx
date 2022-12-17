import Head from 'next/head'
import Layout from "../sections/Layout";
import ContentWithImage from "../components/ContentWithImage";

export default function Home() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Home | Joeri Abbo</title>
                    <meta name="description" content="Een pad van UX developer naar Devops en Cloud engineer"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main className="">
                    <ContentWithImage>
                        Hello world
                    </ContentWithImage>
                </main>
            </Layout>
        </>
    )
}
