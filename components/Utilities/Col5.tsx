import ChildrenType from "../ChildrenType";

const Col5 = (props: ChildrenType) => {
    return (
        <div className="grid grid-cols-2 gap-4 flex-col-reverse mt-4 md:grid-cols-2 lg:grid-cols-5">
            {props.children}
        </div>
    )
}
export default Col5;