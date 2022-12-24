type Props = {
    children: JSX.Element[] | JSX.Element | string
    name?: string | null
};
const ContentWithImage = (props: Props) => {
    return (
        <div className="text-6xl italic text-center my-8">
            `{props.children}`
            {props.name !== null &&
                <span className="text-xs block">
                    {props.name}
                </span>
            }
        </div>
    )
}
export default ContentWithImage;