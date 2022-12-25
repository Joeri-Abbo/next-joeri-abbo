type Props = {
    children: JSX.Element[] | JSX.Element
};
const Timeline = (props: Props) => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {props.children}
        </ol>

    )
}
export default Timeline;