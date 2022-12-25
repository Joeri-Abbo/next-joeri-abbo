import TimelineDownloadButton from "./TimelineDownloadButton";
import Graduation from "../public/icons/graduation-cap-solid.svg";

type Props = {
    children: JSX.Element[] | JSX.Element
};
const TimelineCourseItem = (props: Props) => {
    return (
        <li className="mb-10 ml-6">
            <span
                className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
               <Graduation className="w-4 h-4 7hover:scale-125 transform-gpu fill-blue-500"/>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                AWS course behaald
                <span
                    className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span>
                <span
                    className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">2.0.0 </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Behaald op X
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Verschillende onderdelen
            </p>
            <TimelineDownloadButton>
                Download certificate
            </TimelineDownloadButton>
        </li>
    )
}
export default TimelineCourseItem;