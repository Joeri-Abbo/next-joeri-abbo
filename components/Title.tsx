type Props = {
    children: JSX.Element[] | JSX.Element
};
const Title = (props: Props) => {
    return (
        <div className="text-2xl">
            {props.children}
        </div>
    )
}
export default Title;