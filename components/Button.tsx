type Props = {
    children: string
};
const Button = (props: Props) => {
    return (
        <div className="">
            {props.children}
        </div>
    )
}
export default Button;