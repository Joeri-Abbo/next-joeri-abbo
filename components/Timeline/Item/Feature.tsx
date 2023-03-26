import Time from "../Utilities/Time";
import Sparkles from "../../../public/icons/sparkles-solid.svg"
import Title from "../Utilities/Title";
import Text from "../Utilities/Text";
import IconWrapper from "../Wrapper/Icon";
import ItemWrapper from "../Wrapper/Item";
import Download from "../Button/Download";
import Type from "./Type";
import External from "../Button/External";

type Props = {
    item: Type
};
const Feature = ({item}: Props) => {
    return (
        <ItemWrapper>
            <IconWrapper>
                <Sparkles className="h-4 w-4 transform-gpu fill-blue-500 hover:scale-125"/>
            </IconWrapper>
            <Title tags={item.tags}>
                {item.title}
            </Title>
            <Time>
                {item.time}
            </Time>
            <Text>
                {item.description}
            </Text>
            <Download href={item.downloadHref}/>
            <External href={item.externalHref}/>
        </ItemWrapper>
    )
}
export default Feature;