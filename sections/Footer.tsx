import ArrowUp from "../public/icons/circle-arrow-up-solid.svg"
import MarsRover from "../public/icons/mars-rover.svg"
import Link from "next/link";
import styles from '../styles/Footer.module.css'

import {useTranslation} from 'react-i18next';
import ToTop from "../components/Sections/Footer/ToTop";
import RoverWrapper from "../components/Sections/Footer/RoverWrapper";
import Copyright from "../components/Sections/Footer/Copyright";

const Footer = () => {

    return (
        <footer className="pt-6 mt-24 relative">
            <ToTop/>
            <Copyright/>
            <RoverWrapper/>
        </footer>
    );
};

export default Footer;