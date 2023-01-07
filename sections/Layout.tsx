import Header from "./Header";
import Footer from "./Footer";
import ScrollableAnchor from "../components/Utilities/ScrollableAnchor";

type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Layout = (props: Props) => {
    return (
        <>
            <ScrollableAnchor id="top"/>

            <Header/>
            <div className="min-h-screen mx-auto max-w-6xl flex flex-col">
                <main className="flex-grow container mx-auto px-4 sm:px-6 mt-6">
                    {props.children}
                </main>
            </div>

            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            {/*<script src="https://unpkg.com/magic-snowflakes/dist/snowflakes.min.js"></script>*/}
            {/*<script>*/}
            {/*    new Snowflakes();*/}
            {/*</script>*/}
            <Footer/>
        </>
    );
};

export default Layout;