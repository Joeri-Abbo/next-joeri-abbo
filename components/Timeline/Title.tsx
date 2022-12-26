import {ReactElement, JSXElementConstructor, ReactFragment, ReactPortal} from "react";
import {random} from "nanoid";

type Props = {
    children: JSX.Element[] | JSX.Element | string,
    tags?: any
};

const Title = (props: Props) => {
    let index = 0
    return (
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {props.children}
            {props.tags !== undefined && props.tags.length > 0 && props.tags.map((tag: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => (
                <span key={(index++).toString().toLowerCase()}
                      className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    {tag}
                </span>
            ))}
        </h3>
    )
}
export default Title;