import Underline from "../public/underline.svg";

type Props = {
    children: JSX.Element[] | JSX.Element | string
    name?: string | null
};
const Quote = (props: Props) => {
    let iconClass = "w-20 7 hover:scale-125 transform-gpu fill-blue-500 m-auto"

    return (
        <div className="my-8 text-center text-6xl italic">
            `{props.children}`
            {props.name !== null &&
                <span className="block text-xs">
                    {props.name}
                    <Underline className={iconClass}/>
                </span>
            }
        </div>
    )
}
export default Quote;