import ChildrenType from "./ChildrenType";

const Col2 = (props: ChildrenType) => {
    return (
        <div className="mt-4 grid grid-cols-1 flex-col-reverse gap-4 lg:grid-cols-2">
            {props.children}
        </div>
    )
}
export default Col2;