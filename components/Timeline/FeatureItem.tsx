import Time from "./Time";
import Sparkles from "../../public/icons/sparkles-solid.svg"
import Title from "./Title";
import Text from "./Text";
import IconWrapper from "./IconWrapper";
import ItemWrapper from "./ItemWrapper";
import DownloadButton from "./DownloadButton";

type Props = {
    downloadHref?: string,
    children: JSX.Element[] | JSX.Element | string
    time: JSX.Element[] | JSX.Element | string
    title: JSX.Element[] | JSX.Element | string,
    tags?: any
};
const TimelineWorkItem = (props: Props) => {
    return (
        <ItemWrapper>
            <IconWrapper>
                <Sparkles className="w-4 h-4 7hover:scale-125 transform-gpu fill-blue-500"/>
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
            <DownloadButton href={props.downloadHref}/>
        </ItemWrapper>
    )
}
export default TimelineWorkItem;