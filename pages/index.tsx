import Head from 'next/head'
import Layout from "../sections/Layout";
import ScrollableAnchor from "../components/Utilities/ScrollableAnchor";
import Quote from "../components/Quote";
import CallToAction from "../components/CallToAction";
import UnderlineLink from "../components/Utilities/UnderlineLink";
import Timeline from "../components/Timeline/Timeline";
import ScrollDown from "../components/Utilities/ScrollDown";
import Projects from "../components/Project/Projects";
import Col2 from "../components/Utilities/Col2";
import Box from "../components/Utilities/Box";
import Title from "../components/Utilities/Title";
import {TypeAnimation} from "react-type-animation";
import Socials from "../components/Socials";
import Image from "next/image";
import Col4 from "../components/Utilities/Col4";
import i18n from "i18next";
import Badges from "../components/Badge/Badges";
import CenterButton from "../components/Utilities/CenterButton";
import Packages from "../components/Packagist/Packages";

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
                                    <Socials/>
                                </div>
                            </div>
                        </Box>
                        <Box>
                            <div className="flex h-full justify-center lg:justify-end">
                                <Image src="/hero.jpeg" className="h-80 w-80 rounded-full object-cover object-left"
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
                    <Timeline src={"/rest/" + i18n.language + "/home/timeline.json"}/>
                    <CenterButton href="/timeline">
                        Bekijk timeline
                    </CenterButton>
                    <Projects src={"/rest/" + i18n.language + "/home/projects.json"}/>
                    <CenterButton href="/projects">
                        Meer projecten
                    </CenterButton>
                    <Badges/>
                    <Quote name="Uncle Ben">
                        with great power comes great responsibility
                    </Quote>
                    <Packages/>

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
