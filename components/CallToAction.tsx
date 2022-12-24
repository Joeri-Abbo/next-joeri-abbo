type Props = {
    children: JSX.Element[] | JSX.Element | string
    title?: string
};
const CallToAction = (props: Props) => {
    return (
        <div className="my-8 text-center">
            {props.title !== null &&
                <span className="text-3xl">
                    {props.title}
                </span>
            }
            {props.children}
        </div>
    )
}
export default CallToAction;