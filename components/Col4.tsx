type Props = {
    children: JSX.Element[] | JSX.Element | string

};
const Col4 = (props: Props) => {
    return (
        <div className="grid grid-cols-4 gap-4 flex-col-reverse mt-4">
            {props.children}
        </div>
    )
}
export default Col4;