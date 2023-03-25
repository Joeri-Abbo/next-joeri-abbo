import ChildrenType from "./ChildrenType";

const Col3 = (props: ChildrenType) => {
    return (
        <div className="grid grid-cols-1 gap-4 flex-col-reverse mt-4 lg:grid-cols-3">
            {props.children}
        </div>
    )
}
export default Col3;