import DownloadSolid from "../../public/icons/download-solid.svg"
import Link from "next/link";

type Props = {
    children?: JSX.Element[] | JSX.Element | string
    href?: string | undefined
};

const DownloadButton = (props: Props) => {
    let iconClass = "w-3.5 h-3.5  fill-blue-500 mr-2"
    if (props.href === undefined) {
        return (
            <div>

            </div>
        );
    }

    return (
        <Link target="_blank" href={props.href} download
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            <DownloadSolid className={iconClass}/>
            {props.children === undefined ? "Download" : props.children}
        </Link>

    )
}
export default DownloadButton;