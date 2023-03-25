import DownloadSolid from "../../../public/icons/download-solid.svg"
import Base from "./Base";
import Type from "./Type";

const Download = (props: Type) => {
    return (
        <Base href={props.href}>
            <span className="flex">
                <DownloadSolid className={"w-3.5 h-3.5  fill-blue-500 mr-2"}/>
                {props.children === undefined ? "Download" : props.children}
            </span>
        </Base>
    )
}
export default Download;