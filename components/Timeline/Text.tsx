type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const Text = (props: Props) => {
    return (
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {props.children}
        </p>
    )
}
export default Text;