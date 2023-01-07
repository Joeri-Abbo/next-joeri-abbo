type Props = {
    children: JSX.Element[] | JSX.Element | string
    href: string
};
const UnderlineLink = (props: Props) => {
    return (
        <>
            <a href={props.href} className="underline">
                {props.children}
            </a>
        </>
    )
}
export default UnderlineLink;