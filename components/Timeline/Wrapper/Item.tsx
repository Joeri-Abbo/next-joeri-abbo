import ChildrenType from "../../Utilities/ChildrenType";

const Item = (props: ChildrenType) => {
    return (
        <li className="mb-10 ml-6">
            {props.children}
        </li>
    )
}
export default Item;