import Header from "./Header";
import Footer from "./Footer";
import ScrollableAnchor from "../components/Utilities/ScrollableAnchor";
import Main from "../components/Sections/Layout/Main";

type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Layout = (props: Props) => {
    return (
        <>
            <ScrollableAnchor id="top"/>
            <Header/>
            <Main>
                {props.children}
            </Main>
            <Footer/>
        </>
    );
};

export default Layout;