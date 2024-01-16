import Briefcase from "../../../public/icons/briefcase-solid.svg";
import Item from "../Wrapper/Item";
import Icon from "../Wrapper/Icon";
import Title from "../Utilities/Title";
import Time from "../Utilities/Time";
import Text from "../Utilities/Text";
import Type from "./Type";

type Props = {
    item: Type
};
const Work = ({item}: Props) => {
    return (
        <Item>
            <Icon>
                <Briefcase className="hover:scale-125 h-4 w-4 transform-gpu fill-blue-500"/>
            </Icon>
            <Title tags={item.tags}>
                {item.title}
            </Title>
            <Time>
                {item.time}
            </Time>
            <Text>
                {item.description}
            </Text>
        </Item>
    )
}
export default Work;
