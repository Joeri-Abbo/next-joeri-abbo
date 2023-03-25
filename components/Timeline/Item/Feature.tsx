import Time from "../Utilities/Time";
import Sparkles from "../../../public/icons/sparkles-solid.svg"
import Title from "../Utilities/Title";
import Text from "../Utilities/Text";
import IconWrapper from "../Wrapper/Icon";
import ItemWrapper from "../Wrapper/Item";
import Download from "../Button/Download";
import Type from "./Type";

const Feature = (props: Type) => {
    return (
        <ItemWrapper>
            <IconWrapper>
                <Sparkles className="h-4 w-4 transform-gpu fill-blue-500 hover:scale-125"/>
            </IconWrapper>
            <Title tags={props.tags}>
                {props.title}
            </Title>
            <Time>
                {props.time}
            </Time>
            <Text>
                {props.children}
            </Text>
            <Download href={props.downloadHref}/>
        </ItemWrapper>
    )
}
export default Feature;