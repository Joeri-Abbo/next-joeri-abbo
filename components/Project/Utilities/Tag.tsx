import ChildrenType from "../../Utilities/ChildrenType";

const Tag = (tag: ChildrenType) => {

    return (
        <div className="m-2 rounded bg-blue-500 p-1 text-sm text-white">
            {tag.children}
        </div>
    )
}
export default Tag;