import ChildrenType from "./ChildrenType";

const Col6 = (props: ChildrenType) => {
    return (
        <div className="mt-4 grid grid-cols-2 flex-col-reverse gap-4 md:grid-cols-3 lg:grid-cols-6">
            {props.children}
        </div>
    )
}
export default Col6;