type Props = {
    children: JSX.Element[] | JSX.Element | string
};
const IconWrapper = (props: Props) => {
    return (
        <span
            className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {props.children}
        </span>
    )
}
export default IconWrapper;