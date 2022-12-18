import Logo from "../components/logo";
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import {SunIcon, MoonIcon} from "@heroicons/react/solid";

const Header = () => {

    const dark = "dark";
    const light = "light";
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])


    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;
        const classNames = "w-5 h-5 hover:scale-125 "
        const colorClass = currentTheme === dark ? "text-yellow-500" : "text-gray-900"

        if (currentTheme === dark) {
            return (
                <SunIcon className={classNames + colorClass} role="button" onClick={() => setTheme(light)}/>
            )
        } else {
            return (
                <MoonIcon className={classNames + colorClass} role="button" onClick={() => setTheme(dark)}/>
            )
        }
    };

    return (
        <header
            className="h-15 shadow-sm sticky top-0 z-30 w-full px-2 py-4 sm:px-4 shadow-xl relative dark:bg-black bg-white ">
            <div className="px-2 sm:px-3 py-2 flex justify-between items-center z-100">
                <Logo/>
                {renderThemeChanger()}
            </div>
        </header>
    );
};

export default Header;