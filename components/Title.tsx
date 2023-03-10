type Props = {
    children: JSX.Element[] | JSX.Element
};
const Title = (props: Props) => {
    return (
        <div className="text-2xl min-h-[90px]">
            {props.children}
        </div>
    )
}
export default Title;