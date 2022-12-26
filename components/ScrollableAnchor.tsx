import {useEffect, useRef} from "react";
import {useRouter} from "next/router";

type Props = {
    id: string;
    children: JSX.Element[] | JSX.Element | string
};

const ScrollableAnchor = (props: Props) => {
    const router = useRouter();
    const hashMatchRegex = useRef(new RegExp(/(?<=#)\w*/));
    const scrollTargetElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const match = router.asPath.match(hashMatchRegex.current);
        if (match && match[0] === props.id) {
            scrollTargetElementRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    }, [props.id, router.asPath]);

    return (
        <div id={props.id} ref={scrollTargetElementRef}>
            {props.children}
        </div>
    );
}
export default ScrollableAnchor;