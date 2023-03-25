import Logo from "../components/Sections/Header/Logo";
import Socials from "../components/Socials";
import LanguageSwitcher from "../components/Sections/Header/LanguageSwitcher";
import ThemeSwitcher from "../components/Sections/Header/ThemeSwitcher";

const Header = () => {
    return (
        <header
            className="h-15 relative sticky top-0 z-30 w-full bg-white px-2 py-4 shadow-sm shadow-xl dark:bg-black sm:px-4">
            <div className="z-100 flex items-center justify-between px-2 py-2 sm:px-3">
                <Logo/>
                <div className="flex items-center gap-6">
                    <Socials/>
                    <ThemeSwitcher/>
                    <LanguageSwitcher/>
                </div>
            </div>
        </header>
    );
};

export default Header;