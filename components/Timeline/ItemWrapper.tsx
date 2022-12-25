type Props = {
    children: JSX.Element[] | JSX.Element | string
};

const ItemWrapper = (props: Props) => {
    return (
        <li className="mb-10 ml-6">
            {props.children}
        </li>
    )
}
export default ItemWrapper;