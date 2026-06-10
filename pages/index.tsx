import {useTranslation} from "react-i18next";
import {TypeAnimation} from "react-type-animation";
import Image from "next/image";
import Layout from "../sections/Layout";
import Seo from "../components/Seo";
import ScrollableAnchor from "../components/Utilities/ScrollableAnchor";
import Quote from "../components/Quote";
import ScrollDown from "../components/Utilities/ScrollDown";
import Projects from "../components/Project/Projects";
import Col2 from "../components/Utilities/Col2";
import Box from "../components/Utilities/Box";
import SectionTitle from "../components/Utilities/SectionTitle";
import Badges from "../components/Badge/Badges";
import CenterButton from "../components/Utilities/CenterButton";
import Button from "../components/Utilities/Button";
import TimelineV2 from "../components/Timeline/TimelineV2";

const Chip = ({children}: { children: React.ReactNode }) => (
    <span className="inline-flex items-center whitespace-nowrap rounded-lg border border-gray-200/80 bg-white/60 px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-white">
        {children}
    </span>
);

type SkillGroup = { title: string, icon: string, items: string[], span?: boolean };

const SkillCard = ({group}: { group: SkillGroup }) => (
    <div className={"group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.03] " + (group.span ? "lg:col-span-2" : "")}>
        <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"/>
        <div className="relative mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 text-lg ring-1 ring-inset ring-blue-500/20">
                {group.icon}
            </span>
            <h3 className="font-semibold tracking-tight text-gray-900 dark:text-white">{group.title}</h3>
        </div>
        <div className="relative flex flex-wrap gap-2">
            {group.items.map((item) => <Chip key={item}>{item}</Chip>)}
        </div>
    </div>
);

export default function Home() {
    const {t, i18n} = useTranslation();
    const roles = t('hero.roles', {returnObjects: true}) as string[];
    const sequence = roles.flatMap((role) => [role, 2000]);

    const skillGroups: SkillGroup[] = [
        {title: t('skills.languages'), icon: "💻", items: ["PHP", "Python", "Java", "TypeScript", "JavaScript", "Go", "Rust", "Bash", "SASS", "CSS", "HTML"]},
        {title: t('skills.frameworks'), icon: "🧩", span: true, items: ["Laravel", "Symfony", "WordPress", "Magento 2", "Java Spring", "Django", "Flask", "React", "Next.js", "Vue.js", "Rocket", "Echo", "Tailwind", "Bootstrap"]},
        {title: t('skills.cloud'), icon: "☁️", items: ["AWS", "Lambda", "Amazon Bedrock", "S3", "SQS / SNS", "ECS", "EKS", "Digital Ocean", "Linode", "Cloudflare"]},
        {title: t('skills.devops'), icon: "⚙️", span: true, items: ["Docker", "Kubernetes", "Helm", "ArgoCD", "Terraform", "Ansible", "GitHub Actions", "GitLab CI", "Jenkins", "SonarQube", "Rancher"]},
        {title: t('skills.monitoring'), icon: "📈", items: ["Prometheus", "Grafana", "InfluxDB", "Datadog", "CloudWatch", "Sentry"]},
        {title: t('skills.databases'), icon: "🗄️", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "DynamoDB"]},
        {title: t('skills.os'), icon: "🖥️", items: ["macOS", "Linux", "Ubuntu", "Debian", "CentOS", "Rocky Linux", "Alpine", "Raspbian", "Windows Server"]},
    ];

    return (
        <Layout>
            <Seo title={t('meta.home.title')} description={t('meta.home.description')}/>
            <main>
                <section className="relative min-h-[88vh]">
                    <div aria-hidden
                         className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_72%_35%,rgba(59,130,246,0.14),transparent_70%)]"/>

                    <Col2>
                        <div className="flex animate-fade-in-up items-center lg:h-[70vh]">
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"/>
                                    {t('hero.badge')} · {t('hero.location')}
                                </span>
                                <h1 className="mt-5 pb-1 text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-7xl">
                                    <span className="text-gradient">Joeri Abbo</span>
                                </h1>
                                <div className="mt-3 flex min-h-[44px] flex-wrap items-center gap-x-2 text-2xl font-medium text-gray-700 dark:text-gray-300 sm:text-3xl">
                                    <span>{t('hero.iam')}</span>
                                    <TypeAnimation
                                        key={i18n.language}
                                        sequence={sequence}
                                        speed={30}
                                        wrapper="span"
                                        repeat={Infinity}
                                        className="text-blue-500 dark:text-blue-400"
                                    />
                                </div>
                                <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
                                    {t('hero.intro')}
                                </p>
                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Button href="https://www.linkedin.com/in/joeri-abbo-43a457144/" variant="primary">
                                        {t('hero.ctaConnect')}
                                    </Button>
                                    <Button href="/cv.pdf" variant="secondary">
                                        {t('hero.ctaCv')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Box>
                            <div className="flex h-full items-center justify-center lg:justify-end">
                                <div className="relative">
                                    <div aria-hidden className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 blur-2xl"/>
                                    <Image src="/hero.jpeg"
                                           className="relative h-72 w-72 rounded-full object-cover object-left shadow-2xl ring-4 ring-white dark:ring-gray-900 sm:h-80 sm:w-80"
                                           alt="Joeri Abbo"
                                           width="600" height="600" priority/>
                                </div>
                            </div>
                        </Box>
                    </Col2>
                    <ScrollDown href="/#quote"/>
                </section>

                <ScrollableAnchor id="quote">
                    <Quote name="Gene Kranz">
                        Failure is not an option
                    </Quote>
                </ScrollableAnchor>

                <SectionTitle subtitle={t('sections.skillsSubtitle')}>
                    {t('sections.skillsTitle')}
                </SectionTitle>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group) => (
                        <SkillCard key={group.title} group={group}/>
                    ))}
                </div>

                <SectionTitle subtitle={t('sections.experienceSubtitle')}>
                    {t('sections.experienceTitle')}
                </SectionTitle>
                <TimelineV2 src={"/rest/" + i18n.language + "/home/timeline.json"}/>
                <div className="mt-8">
                    <CenterButton href="/timeline">
                        {t('timeline.viewFull')}
                    </CenterButton>
                </div>

                <SectionTitle subtitle={t('sections.projectsSubtitle')}>
                    {t('sections.projectsTitle')}
                </SectionTitle>
                <Projects src={"/rest/" + i18n.language + "/home/projects.json"}/>
                <div className="mt-8">
                    <CenterButton href="/projects">
                        {t('projects.viewMore')}
                    </CenterButton>
                </div>

                <Quote name="Uncle Ben">
                    With great power comes great responsibility
                </Quote>

                <SectionTitle>
                    {t('sections.certificationsTitle')}
                </SectionTitle>
                <Badges/>

                <Quote name={t('quotes.danceAuthor')}>
                    {t('quotes.dance')}
                </Quote>

                <section className="my-20">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 px-6 py-14 text-center shadow-xl shadow-blue-500/20">
                        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(40%_60%_at_85%_15%,rgba(255,255,255,0.18),transparent_60%)]"/>
                        <div className="relative">
                            <span className="text-5xl">☕</span>
                            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                                {t('cta.title')}
                            </h2>
                            <p className="mx-auto mt-3 max-w-xl text-lg text-blue-100">
                                {t('cta.subtitle')}
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a href="https://www.linkedin.com/in/joeri-abbo-43a457144/"
                                   target="_blank" rel="noopener noreferrer"
                                   className="rounded-lg bg-white px-6 py-3 font-medium text-blue-600 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-blue-50">
                                    {t('cta.linkedin')}
                                </a>
                                <a href="mailto:joeriabbo@hotmail.com?subject=Hello Joeri"
                                   className="rounded-lg border border-white/50 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10">
                                    {t('cta.email')}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
