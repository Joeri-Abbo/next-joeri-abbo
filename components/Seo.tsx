import Head from 'next/head';

type Props = {
    title: string;
    description: string;
    path?: string;
};

const SITE_URL = 'https://joeriabbo.nl';

const Seo = (props: Props) => {
    const url = SITE_URL + (props.path ?? '');
    const image = `${SITE_URL}/me-square.png`;

    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="author" content="Joeri Abbo"/>
            <meta name="theme-color" content="#3b82f6"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="canonical" href={url}/>

            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Joeri Abbo"/>
            <meta property="og:title" content={props.title}/>
            <meta property="og:description" content={props.description}/>
            <meta property="og:url" content={url}/>
            <meta property="og:image" content={image}/>

            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={props.title}/>
            <meta name="twitter:description" content={props.description}/>
            <meta name="twitter:image" content={image}/>
        </Head>
    );
};

export default Seo;
