import Underline from "../public/underline.svg";

type Props = {
    children: JSX.Element[] | JSX.Element | string
    name?: string | null
};
const Quote = (props: Props) => {
    let iconClass = "w-20 7hover:scale-125 transform-gpu fill-blue-500 m-auto"

    return (
        <div className="text-6xl italic text-center my-8">
            `{props.children}`
            {props.name !== null &&
                <span className="text-xs block">
                    {props.name}
                    <Underline className={iconClass}/>
                </span>
            }
        </div>
    )
}
export default Quote;