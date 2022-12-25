import Header from "./Header";
import Footer from "./Footer";
import ScrollableAnchor from "../components/ScrollableAnchor";

// @ts-ignore
const Layout = ({children}) => {
    return (
        <>
            <ScrollableAnchor id="top" children=""/>

            <Header/>
            <div className="min-h-screen mx-auto max-w-6xl flex flex-col">
                <main className="flex-grow container mx-auto px-4 sm:px-6 mt-6">
                    {children}
                </main>
            </div>

            {/*TODO remove after january*/}
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