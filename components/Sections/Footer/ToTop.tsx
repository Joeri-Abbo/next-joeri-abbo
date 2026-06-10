import Link from "next/link";
import {useTranslation} from "react-i18next";
import ArrowUp from "../../../public/icons/circle-arrow-up-solid.svg";

const ToTop = () => {
    const {t} = useTranslation();
    return (
        <Link href="#top"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
            <ArrowUp className="h-5 w-5 fill-current"/>
            {t('footer.backToTop')}
        </Link>
    )
}
export default ToTop;
