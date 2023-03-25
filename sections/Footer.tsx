import ToTop from "../components/Sections/Footer/ToTop";
import RoverWrapper from "../components/Sections/Footer/RoverWrapper";
import Copyright from "../components/Sections/Footer/Copyright";

const Footer = () => {

    return (
        <footer className="relative mt-24 pt-6">
            <ToTop/>
            <Copyright/>
            <RoverWrapper/>
        </footer>
    );
};

export default Footer;