type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Box = (props: Props) => {
    return (
        <div className="p-4">
            {props.children}
        </div>
    )
}
export default Box;