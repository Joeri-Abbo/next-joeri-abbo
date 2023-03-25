import ChildrenType from "../ChildrenType";

const Col6 = (props: ChildrenType) => {
    return (
        <div className="grid grid-cols-2 gap-4 flex-col-reverse mt-4 md:grid-cols-3 lg:grid-cols-6">
            {props.children}
        </div>
    )
}
export default Col6;