import ChildrenType from "../../Utilities/ChildrenType";

const Item = (props: ChildrenType) => {
    return (
        <div className="mb-10 ml-6">
            {props.children}
        </div>
    )
}
export default Item;
