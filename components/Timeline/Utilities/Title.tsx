import React from "react";

type Props = {
    children: React.ReactNode,
    tags?: any
};

const Title = (props: Props) => {
    return (
        <div className="mb-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {props.children}
            </h3>
            {props.tags !== undefined && props.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                    {props.tags.map((tag: React.ReactNode, index: number) => (
                        <span key={index}
                              className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Title;
