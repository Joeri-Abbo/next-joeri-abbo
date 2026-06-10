import Link from "next/link";
import {useTranslation} from "react-i18next";
import ToTop from "../components/Sections/Footer/ToTop";
import Rover from "../components/Sections/Footer/Rover";
import Copyright from "../components/Sections/Footer/Copyright";
import Socials from "../components/Socials";

const Footer = () => {
    const {t} = useTranslation();

    const links = [
        {href: "/", label: t('nav.home')},
        {href: "/timeline", label: t('nav.timeline')},
        {href: "/projects", label: t('nav.projects')},
    ];

    return (
        <footer className="relative mt-24 border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
                <div>
                    <div className="text-gradient text-lg font-bold">Joeri Abbo</div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('footer.tagline')}</p>
                </div>

                <nav className="flex gap-6">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href}
                              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Socials/>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between">
                    <Copyright/>
                    <ToTop/>
                </div>
            </div>

            <Rover/>
        </footer>
    );
};

export default Footer;
