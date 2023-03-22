import ChildrenType from "../ChildrenType";

const Tag = (tag: ChildrenType) => {

    return (
        <div className="text-sm bg-blue-500 rounded text-white p-1 m-2">
            {tag.children}
        </div>
    )
}
export default Tag;