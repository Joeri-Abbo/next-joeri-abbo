import ChildrenType from "./ChildrenType";

const Col3 = (props: ChildrenType) => {
    return (
        <div className="mt-4 grid grid-cols-1 flex-col-reverse gap-4 lg:grid-cols-3">
            {props.children}
        </div>
    )
}
export default Col3;