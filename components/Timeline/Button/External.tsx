import External from "../../../public/icons/external.svg"
import {useTranslation} from "react-i18next";
import Base from "./Base";
import Type from "./Type";

const ExternalButton = (props: Type) => {
    const {t} = useTranslation();
    if (props.href === undefined || props.href === "" || props.href === "#") return null;

    return (
        <Base href={props.href}>
            <span className="flex items-center">
                <External className={"w-3.5 h-3.5  fill-blue-500 mr-2"}/>
                {props.children === undefined ? t('timeline.visit') : props.children}
            </span>
        </Base>
    )
}
export default ExternalButton;
