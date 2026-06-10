import {useTranslation} from "react-i18next";

const Copyright = () => {
    const {t} = useTranslation();

    return (
        <div className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Joeri Abbo · {t('common:copyright')}
        </div>
    )
}
export default Copyright;