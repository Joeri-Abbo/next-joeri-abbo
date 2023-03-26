import Download from "../Button/Download";
import Graduation from "../../../public/icons/graduation-cap-solid.svg";
import ItemWrapper from "../Wrapper/Item";
import IconWrapper from "../Wrapper/Icon";
import Title from "../Utilities/Title";
import Time from "../Utilities/Time";
import Text from "../Utilities/Text";
import Type from "./Type";
import External from "../Button/External";

type Props = {
    item: Type
};
const Course = ({item}: Props) => {
    return (
        <ItemWrapper>
            <IconWrapper>
                <Graduation className="h-4 w-4 transform-gpu fill-blue-500 hover:scale-125"/>
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
export default Course;