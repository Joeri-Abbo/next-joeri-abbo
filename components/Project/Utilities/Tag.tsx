import ChildrenType from "../../Utilities/ChildrenType";

const Tag = (tag: ChildrenType) => {

    return (
        <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
            {tag.children}
        </span>
    )
}
export default Tag;