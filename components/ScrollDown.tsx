import Link from "next/link";
import ArrowUp from "../public/icons/circle-arrow-up-solid.svg";

type Props = {
    href: string
};
const ScrollDown = (props: Props) => {
    return (
        <Link href={props.href} className="flex content-center justify-center rotate-180">
            <ArrowUp className="w-8 h-8 fill-blue-500 dark:fill-white animate-bounce" role="button"/>
        </Link>
    )
}
export default ScrollDown;