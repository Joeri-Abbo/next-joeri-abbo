import Head from 'next/head'
import Layout from "../sections/Layout";
import ContentWithImage from "../components/ContentWithImage";
import ScrollableAnchor from "../components/ScrollableAnchor";
import Link from "next/link";
import Col4 from "../components/Col4";
import Box from "../components/Box";
import Image from "next/image";
import Quote from "../components/Quote";

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

                    <ContentWithImage>
                        Hello world
                    </ContentWithImage>
                    <Quote name="Gene Kranz">
                        Failure is not an option
                    </Quote>
                    <Col4>
                        <Box>
                            <Image src="https://source.unsplash.com/random/900%C3%97700/?programming"
                                   className="object-cover h-32 w-full" alt="Me" width="600" height="600"/>

                            <div>
                                wack
                            </div>
                        </Box>
                        <Box>
                            <Image src="https://source.unsplash.com/random/900%C3%97700/?java"
                                   className="object-cover h-32 w-full" alt="Me" width="600" height="600"/>

                            <div>
                                wack
                            </div>
                        </Box>
                        <Box>
                            <Image src="https://source.unsplash.com/random/900%C3%97700/?python"
                                   className="object-cover h-32 w-full" alt="Me" width="600" height="600"/>

                            <div>
                                wack
                            </div>
                        </Box>
                        <Box>
                            <Image src="https://source.unsplash.com/random/900%C3%97700/?rust"
                                   className="object-cover h-32 w-full" alt="Me" width="600" height="600"/>

                            <div>
                                Een title
                            </div>
                        </Box>
                        <Box>
                            <Image src="https://source.unsplash.com/random/900%C3%97700/?frost"
                                   className="object-cover h-32 w-full" alt="Me" width="600" height="600"/>

                            <div>
                                wack
                            </div>
                        </Box>
                    </Col4>
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
