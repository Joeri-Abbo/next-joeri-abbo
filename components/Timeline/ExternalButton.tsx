import External from "../../public/icons/external.svg"
import Button from "./Button";

type Props = {
    children?: JSX.Element[] | JSX.Element | string
    href?: string | undefined
};
const DownloadButton = (props: Props) => {
    if (props.href === undefined) {
        return (
            <div>

            </div>
        );
    }

    return (
        <Button href={props.href}>
            <span className="flex">
                <External className={"w-3.5 h-3.5  fill-blue-500 mr-2"}/>
                {props.children === undefined ? "Download" : props.children}
            </span>
        </Button>
    )
}
export default DownloadButton;