import Link from "next/link";
import ArrowUp from "../../public/icons/circle-arrow-up-solid.svg";

type Props = {
    href: string
};
const ScrollDown = (props: Props) => {
    return (
        <Link href={props.href} className="flex rotate-180 content-center justify-center">
            <ArrowUp className="h-8 w-8 animate-bounce fill-blue-500 dark:fill-white" role="button"/>
        </Link>
    )
}
export default ScrollDown;