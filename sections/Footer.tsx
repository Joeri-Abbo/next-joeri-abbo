import ToTop from "../components/Sections/Footer/ToTop";
import Rover from "../components/Sections/Footer/Rover";
import Copyright from "../components/Sections/Footer/Copyright";

const Footer = () => {

    return (
        <footer className="relative mt-24 pt-6">
            <ToTop/>
            <Copyright/>
            <Rover/>
        </footer>
    );
};

export default Footer;