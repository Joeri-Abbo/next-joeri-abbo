import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import {Inter} from 'next/font/google';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const inter = Inter({subsets: ['latin'], variable: '--font-inter'});

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div className={`${inter.variable} font-sans`}>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                common: require('../locales/en/common.json'),
            },
            nl: {
                common: require('../locales/nl/common.json'),
            },
        },
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language
        ns: ['common'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
    });
