import ChildrenType from "./ChildrenType";

const Title = (props: ChildrenType) => {
    return (
        <div className="text-2xl min-h-[90px]">
            {props.children}
        </div>
    )
}
export default Title;