import ChildrenType from "./ChildrenType";

const Button = (props: ChildrenType) => {
    return (
        <div className="">
            {props.children}
        </div>
    )
}
export default Button;