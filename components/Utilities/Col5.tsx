import ChildrenType from "./ChildrenType";

const Col5 = (props: ChildrenType) => {
    return (
        <div className="mt-4 grid grid-cols-2 flex-col-reverse gap-4 md:grid-cols-2 lg:grid-cols-5">
            {props.children}
        </div>
    )
}
export default Col5;