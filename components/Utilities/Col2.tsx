import ChildrenType from "../ChildrenType";

const Col2 = (props: ChildrenType) => {
    return (
        <div className="grid grid-cols-1 gap-4 flex-col-reverse mt-4 lg:grid-cols-2">
            {props.children}
        </div>
    )
}
export default Col2;