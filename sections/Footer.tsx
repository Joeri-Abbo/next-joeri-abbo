import ArrowUp from "../public/icons/circle-arrow-up-solid.svg"
import MarsRover from "../public/icons/mars-rover.svg"
import Link from "next/link";
import styles from '../styles/Footer.module.css'


const Footer = () => {
    return (
        <footer className="px-4 sm:px-6 py-6 mt-24 relative">
            <Link href="/#top" className="absolute">
                <ArrowUp className="w-8 h-8 fill-blue-500 dark:fill-white" role="button"/>
            </Link>
            <div className="text-center text-sm text-gray-500">
                <span
                    className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2"> Joeri Abbo
                </span>   &copy; {new Date().getFullYear()} All
                Rights Reserved
            </div>

            <MarsRover
                       className={styles.mars_rover + " w-8 h-8 fill-blue-500 dark:fill-white absolute"}/>
        </footer>
    );
};

export default Footer;