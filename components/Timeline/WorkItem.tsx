import Briefcase from "../../public/icons/briefcase-solid.svg";
import ItemWrapper from "./ItemWrapper";
import IconWrapper from "./IconWrapper";
import Title from "./Title";
import Time from "./Time";
import Text from "./Text";

type Props = {
    children: JSX.Element[] | JSX.Element | string
    time: JSX.Element[] | JSX.Element | string
    title: JSX.Element[] | JSX.Element | string,
    tags?: any};
const WorkItem = (props: Props) => {
    return (
        <ItemWrapper>
            <IconWrapper>
                <Briefcase className="w-4 h-4 7hover:scale-125 transform-gpu fill-blue-500"/>
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
        </ItemWrapper>
    )
}
export default WorkItem;