import External from "../../../public/icons/external.svg"
import Link from "next/link";
import Type from "./Type";

const Base = (props: Type) => {
    if (props.href === undefined) {
        return (
            <div>

            </div>
        );
    }

    return (
        <Link target="_blank" href={props.href}
              className="inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
            {props.children}
        </Link>
    )
}
export default Base;