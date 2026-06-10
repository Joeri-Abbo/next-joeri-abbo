import Link from "next/link";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";
import Logo from "../components/Sections/Header/Logo";
import Socials from "../components/Socials";
import LanguageSwitcher from "../components/Sections/Header/LanguageSwitcher";
import ThemeSwitcher from "../components/Sections/Header/ThemeSwitcher";

const Header = () => {
    const {t} = useTranslation();
    const router = useRouter();

    const links = [
        {href: "/", label: t('nav.home')},
        {href: "/timeline", label: t('nav.timeline')},
        {href: "/projects", label: t('nav.projects')},
    ];

    return (
        <header className="sticky top-0 z-30 w-full border-b border-gray-200/60 bg-white/70 backdrop-blur-lg dark:border-gray-800/60 dark:bg-gray-950/70">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                <Logo/>

                <nav className="hidden items-center gap-1 md:flex">
                    {links.map((link) => {
                        const active = router.pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    "rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                                    (active
                                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white")
                                }
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:block">
                        <Socials/>
                    </div>
                    <div className="flex items-center gap-3">
                        <ThemeSwitcher/>
                        <LanguageSwitcher/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
