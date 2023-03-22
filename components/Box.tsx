import ChildrenType from "./ChildrenType";

const Box = (props: ChildrenType) => {
    return (
        <div className="p-4">
            {props.children}
        </div>
    )
}
export default Box;