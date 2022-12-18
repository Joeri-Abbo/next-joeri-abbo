import Head from 'next/head'
import Layout from "../sections/Layout";
import ContentWithImage from "../components/ContentWithImage";
import ScrollableAnchor from "../components/ScrollableAnchor";
import Link from "next/link";
import Col4 from "../components/Col4";
import Box from "../components/Box";

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
                    <Link href="/#ContactMe">Contact Me</Link>
                    <Col4>
                        <Box>
                            <div>
                                wack
                            </div>
                        </Box>
                        <Box>
                            <div>
                                wack
                            </div>
                        </Box>
                        <Box>
                            <div>
                                wack
                            </div>
                        </Box>
                        <Box>
                            <div>
                                wack
                            </div>
                        </Box>
                        <Box>
                            <div>
                                wack
                            </div>
                        </Box>
                    </Col4>

                    <ContentWithImage>
                        Hello world
                    </ContentWithImage>
                    <ContentWithImage>
                        Hello world
                    </ContentWithImage>
                    <ContentWithImage>
                        Hello world
                    </ContentWithImage>


                    <ScrollableAnchor id="ContactMe">
                        Your content here
                    </ScrollableAnchor>
                </main>
            </Layout>
        </>
    )
}
