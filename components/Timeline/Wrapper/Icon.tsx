import ChildrenType from "../../Utilities/ChildrenType";

const Icon = (props: ChildrenType) => {
    return (
        <span
            className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            {props.children}
        </span>
    )
}
export default Icon;