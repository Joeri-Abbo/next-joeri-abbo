import ChildrenType from "../../Utilities/ChildrenType";

const Time = (props: ChildrenType) => {
    return (
        <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {props.children}
        </time>
    )
}
export default Time;