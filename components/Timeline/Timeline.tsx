import ChildrenType from "../ChildrenType";

const Timeline = (props: ChildrenType) => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {props.children}
        </ol>
    )
}
export default Timeline;