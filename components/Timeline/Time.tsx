import ChildrenType from "../ChildrenType";

const Time = (props: ChildrenType) => {
    return (
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {props.children}
        </time>
    )
}
export default Time;