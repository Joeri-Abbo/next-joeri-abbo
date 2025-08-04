import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ScrollableAnchor from "../components/Utilities/ScrollableAnchor";
import Main from "../components/Sections/Layout/Main";

type Props = {
    children: React.ReactNode
};
const Layout = (props: Props) => {
    return (
        <>
            <div className={'bg-black'}>
                <div className={'container mx-auto'}>
                    <div className={'flex justify-between items-center py-2'}>
                        <div className={'text-white text-sm'}>
                            <span className={'font-bold'}>WIP</span> - This website is still under construction. 🏗️
                        </div>
                    </div>
                </div>
            </div>
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