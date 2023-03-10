import Head from 'next/head'
import Layout from "../sections/Layout";
import ScrollableAnchor from "../components/Utilities/ScrollableAnchor";
import Quote from "../components/Quote";
import CallToAction from "../components/CallToAction";
import UnderlineLink from "../components/Utilities/UnderlineLink";
import Timeline from "../components/Timeline/Timeline";
import CourseItem from "../components/Timeline/CourseItem";
import WorkItem from "../components/Timeline/WorkItem";
import FeatureItem from "../components/Timeline/FeatureItem";
import ScrollDown from "../components/Utilities/ScrollDown";
import Projects from "../components/Project/Projects";
import Col2 from "../components/Utilities/Col2";
import Box from "../components/Box";
import Title from "../components/Title";
import {TypeAnimation} from "react-type-animation";
import Button from "../components/Button";
import Socials from "../components/Socials";
import Image from "next/image";
import Col4 from "../components/Utilities/Col4";

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
                    <Col2>
                        <Box>
                            <div className="flex h-full">
                                <div className="mt-auto mb-auto">
                                    <div>
                                        <Title>
                                            <TypeAnimation
                                                sequence={[
                                                    'Ik ben een Backend developer',
                                                    2000,
                                                    'Ik ben een Frontend developer',
                                                    2000,
                                                    'Ik ben een Fullstack developer',
                                                    2000,
                                                    'Ik ben een Devops engineer',
                                                    2000,
                                                    'Ik ben een Cloud architect',
                                                    2000,
                                                    'Ik ben een Devops architect',
                                                    2000,
                                                ]}
                                                speed={30}
                                                style={{fontSize: '2em', width: '100%'}}
                                                wrapper="span"
                                                repeat={Infinity}
                                            />
                                        </Title>
                                        <div>
                                            Test
                                        </div>
                                    </div>
                                    <Button>
                                        Hello
                                    </Button>
                                    <Socials/>
                                </div>
                            </div>
                        </Box>
                        <Box>
                            <div className="flex h-full lg:justify-end justify-center">
                                <Image src="/hero.jpeg" className="rounded-full object-cover h-80 w-80 object-left"
                                       alt="Me"
                                       width="600" height="600"/>
                            </div>
                        </Box>
                    </Col2>
                    <ScrollDown href="/#quote"/>

                    <ScrollableAnchor id="quote">
                        <Quote name="Gene Kranz">
                            Failure is not an option
                        </Quote>
                    </ScrollableAnchor>
                    <Col4>
                        <Box>
                            <h3>
                                Languages
                            </h3>
                            <ul>
                                <li>PHP</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>Typescript</li>
                                <li>Javascript</li>
                                <li>Rust</li>
                                <li>GoLang</li>
                                <li>SASS</li>
                                <li>CSS</li>
                                <li>HTML</li>
                            </ul>
                        </Box>
                        <Box>
                            <h3>Frameworks</h3>
                            <ul>
                                <li>Laravel</li>
                                <li>WordPress</li>
                                <li>Symfony</li>
                                <li>Zend (1.12 / 3.0)</li>
                                <li>Magento 2</li>
                                <li>Java Spring</li>
                                <li>Django</li>
                                <li>Flask</li>
                                <li>ReactJs</li>
                                <li>Nextjs</li>
                                <li>VueJs</li>
                                <li>JQuery</li>
                                <li>Rocket</li>
                                <li>Echo</li>
                                <li>Tailwind</li>
                                <li>Bootstrap</li>
                            </ul>
                        </Box>
                        <Box>
                            <h3>Databases</h3>
                            <ul>
                                <li>Mysql</li>
                                <li>Redis</li>
                                <li>DynamoDB</li>
                            </ul>
                            <h3>Os</h3>
                            <ul>
                                <li>MacOS</li>
                                <li>Centos</li>
                                <li>Ubuntu</li>
                                <li>Debian</li>
                                <li>Rasbian</li>
                                <li>Alpine</li>
                            </ul>
                        </Box>
                        <Box>
                            <h3>Tools</h3>
                            <ul>
                                <li>Digital Ocean</li>
                                <li>AWS</li>
                                <li>Cloudflare</li>
                                <li>Github actions</li>
                                <li>Gitlab ci</li>
                                <li>Jenkins</li>
                                <li>Docker</li>
                                <li>Kubernetes (k3/k8)</li>
                                <li>Rancher</li>
                                <li>Ansible</li>
                                <li>Terraform</li>
                            </ul>
                        </Box>
                    </Col4>
                    <Timeline>
                        <CourseItem time="Vandaag" title="AWS course" tags={["1.0.2", "latest"]} downloadHref="#">
                            Verschillende onderdelen
                        </CourseItem>
                        <WorkItem time="Vandaag" title="Gestart bij Tracefy" tags={["1.0.1"]}>
                            Verschillende onderdelen
                        </WorkItem>
                        <FeatureItem downloadHref="#" time="Vandaag" title="Start DevOps Bootcamp | Tech world met Nana"
                                     tags={["feature/devops"]}>
                            Verschillende onderdelen
                        </FeatureItem>
                    </Timeline>
                    <Projects src="/rest/projects.json" amount={10}/>
                    <CallToAction title="Koffietje doen?">
                        <p>
                            Stuur mij dan een berichtje op <UnderlineLink
                            href="https://www.linkedin.com/in/joeri-abbo-43a457144/">Linkedin</UnderlineLink>
                        </p>
                    </CallToAction>
                </main>
            </Layout>
        </>
    )
}
