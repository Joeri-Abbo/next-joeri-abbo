import Logo from "../components/logo";
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
// @ts-ignore
import {SunIcon, MoonIcon} from "@heroicons/react/solid";

const Header = () => {

    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();
    useEffect(() => {
        setMounted(true);
    }, [])
    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="w-5 h-5 text-yellow-500 " role="button" onClick={() => setTheme('light')}/>
            )
        } else {
            return (
                <MoonIcon className="w-5 h-5 text-gray-900 " role="button" onClick={() => setTheme('dark')}/>
            )
        }
    };

    return (
        <header className="h-15 shadow-sm dark:border-gray-700">
            <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Logo/>

                {renderThemeChanger()}
            </div>
        </header>
    );
};

export default Header;