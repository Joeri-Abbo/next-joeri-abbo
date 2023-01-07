import Head from 'next/head'
import Layout from "../sections/Layout";
import Image from "next/image";

export default function FourOFour() {
    return (
        <>
            <Layout>
                <Head>
                    <title>404 | Joeri Abbo</title>
                    <meta name="description" content="404"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main className="">
                    <div className="content-center m-auto flex">
                        <Image src="/memes/meme2.png" className="ml-auto mr-auto" alt="Me" width="600" height="600"/>
                    </div>
                </main>
            </Layout>
        </>
    )
}
