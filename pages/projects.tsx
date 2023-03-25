import Head from 'next/head'
import Layout from "../sections/Layout";
import ScrollableAnchor from "../components/Utilities/ScrollableAnchor";
import Quote from "../components/Quote";
import CallToAction from "../components/CallToAction";
import UnderlineLink from "../components/Utilities/UnderlineLink";
import Timeline from "../components/Timeline/Timeline";
import Course from "../components/Timeline/Item/Course";
import Work from "../components/Timeline/Item/Work";
import FeatureItem from "../components/Timeline/Item/Feature";
import ScrollDown from "../components/Utilities/ScrollDown";
import Projects from "../components/Project/Projects";
import Col2 from "../components/Utilities/Col2";
import Box from "../components/Utilities/Box";
import Title from "../components/Utilities/Title";
import {TypeAnimation} from "react-type-animation";
import Button from "../components/Utilities/Button";
import Socials from "../components/Socials";
import Image from "next/image";
import Col4 from "../components/Utilities/Col4";
import i18n from "i18next";
import Badges from "../components/Badge/Badges";

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
                    <Projects src={"/rest/" + i18n.language + "/projects.json"} amount={10}/>
                </main>
            </Layout>
        </>
    )
}
