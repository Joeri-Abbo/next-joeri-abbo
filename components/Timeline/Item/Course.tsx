import Download from "../Button/Download";
import Graduation from "../../../public/icons/graduation-cap-solid.svg";
import ItemWrapper from "../Wrapper/Item";
import IconWrapper from "../Wrapper/Icon";
import Title from "../Utilities/Title";
import Time from "../Utilities/Time";
import Text from "../Utilities/Text";
import Type from "./Type";

const Course = (props: Type) => {
    return (
        <ItemWrapper>
            <IconWrapper>
                <Graduation className="h-4 w-4 transform-gpu fill-blue-500 hover:scale-125"/>
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
export default Course;