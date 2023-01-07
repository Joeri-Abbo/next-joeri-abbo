import Logo from "../components/Sections/Header/Logo";
import Socials from "../components/Socials";
import LanguageSwitcher from "../components/Sections/Header/LanguageSwitcher";
import ThemeSwitcher from "../components/Sections/Header/ThemeSwitcher";

const Header = () => {
    return (
        <header
            className="h-15 shadow-sm sticky top-0 z-30 w-full px-2 py-4 sm:px-4 shadow-xl relative dark:bg-black bg-white ">
            <div className="px-2 sm:px-3 py-2 flex justify-between items-center z-100">
                <Logo/>
                <div className="flex gap-6 items-center">
                    <Socials/>
                    <ThemeSwitcher/>
                    <LanguageSwitcher/>
                </div>
            </div>
        </header>
    );
};

export default Header;