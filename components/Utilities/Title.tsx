import ChildrenType from "./ChildrenType";

const Title = (props: ChildrenType) => {
    return (
        <div className="min-h-[90px] text-2xl">
            {props.children}
        </div>
    )
}
export default Title;