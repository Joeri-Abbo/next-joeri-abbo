import ChildrenType from "./ChildrenType";

const Col4 = (props: ChildrenType) => {
    return (
        <div className="mt-4 grid grid-cols-2 flex-col-reverse gap-4 md:grid-cols-2 lg:grid-cols-4">
            {props.children}
        </div>
    )
}
export default Col4;