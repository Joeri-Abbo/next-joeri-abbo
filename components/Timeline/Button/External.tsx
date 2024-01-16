import External from "../../../public/icons/external.svg"
import Base from "./Base";
import Type from "./Type";

const DownloadButton = (props: Type) => {
    if (props.href === undefined || props.href === "") return null;

    return (
        <Base href={props.href}>
            <span className="flex">
                <External className={"w-3.5 h-3.5  fill-blue-500 mr-2"}/>
                {props.children === undefined ? "Download" : props.children}
            </span>
        </Base>
    )
}
export default DownloadButton;
