import React from "react";

type Props = {
    children: React.ReactNode,
    tags?: any
};

const Title = (props: Props) => {
    let index = 0
    return (
        <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            {props.children}
            {props.tags !== undefined && props.tags.length > 0 && props.tags.map((tag: React.ReactNode) => (
                <span key={(index++).toString().toLowerCase()}
                      className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                    {tag}
                </span>
            ))}
        </h3>
    )
}
export default Title;