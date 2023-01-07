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