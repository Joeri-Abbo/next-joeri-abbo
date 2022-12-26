import Head from 'next/head'
import Layout from "../sections/Layout";
import ContentWithImage from "../components/ContentWithImage";
import ScrollableAnchor from "../components/ScrollableAnchor";
import Link from "next/link";
import Col4 from "../components/Col4";
import Box from "../components/Box";
import Image from "next/image";
import Quote from "../components/Quote";
import CallToAction from "../components/CallToAction";
import UnderlineLink from "../components/UnderlineLink";
import Timeline from "../components/Timeline/Timeline";
import CourseItem from "../components/Timeline/CourseItem";
import WorkItem from "../components/Timeline/WorkItem";
import FeatureItem from "../components/Timeline/FeatureItem";
import ScrollDown from "../components/ScrollDown";

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
                    <ScrollDown href="/#quote"/>
                    <ScrollableAnchor id="quote">
                        <Quote name="Gene Kranz">
                            Failure is not an option
                        </Quote>
                    </ScrollableAnchor>
                    <Timeline>
                        <CourseItem time="Vandaag" title="AWS course"  tags={["1.0.2"]} downloadHref="#">
                            Verschillende onderdelen
                        </CourseItem>
                        <WorkItem time="Vandaag" title="Gestart bij Tracefy"  tags={["1.0.1"]}>
                            Verschillende onderdelen
                        </WorkItem>
                        <FeatureItem downloadHref="#" time="Vandaag" title="Start DevOps Bootcamp | Tech world met Nana" tags={["feature/devops", "latest"]}>
                            Verschillende onderdelen
                        </FeatureItem>
                    </Timeline>
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
                    <CallToAction title="Koffietje doen?">
                        <p>
                            Stuur mij dan een brichtje op <UnderlineLink
                            href="https://www.linkedin.com/in/joeri-abbo-43a457144/">Linkedin</UnderlineLink>
                        </p>
                    </CallToAction>
                    <ScrollableAnchor id="ContactMe">
                        Your content here
                    </ScrollableAnchor>
                </main>
            </Layout>
        </>
    )
}
