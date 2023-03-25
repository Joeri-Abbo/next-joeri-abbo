import Briefcase from "../../../public/icons/briefcase-solid.svg";
import Item from "../Wrapper/Item";
import Icon from "../Wrapper/Icon";
import Title from "../Utilities/Title";
import Time from "../Utilities/Time";
import Text from "../Utilities/Text";
import Type from "./Type";

const Work = (props: Type) => {
    return (
        <Item>
            <Icon>
                <Briefcase className="w-4 h-4 7hover:scale-125 transform-gpu fill-blue-500"/>
            </Icon>
            <Title tags={props.tags}>
                {props.title}
            </Title>
            <Time>
                {props.time}
            </Time>
            <Text>
                {props.children}
            </Text>
        </Item>
    )
}
export default Work;