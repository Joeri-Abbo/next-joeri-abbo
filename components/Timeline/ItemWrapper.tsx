import ChildrenType from "../ChildrenType";

const ItemWrapper = (props: ChildrenType) => {
    return (
        <li className="mb-10 ml-6">
            {props.children}
        </li>
    )
}
export default ItemWrapper;