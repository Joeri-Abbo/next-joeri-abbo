import React from 'react';

type Props = {
    children: React.ReactNode
    title?: string
};
const CallToAction = (props: Props) => {
    return (
        <div className="my-16 rounded-2xl bg-gray-50 px-6 py-12 text-center dark:bg-gray-800/50">
            {props.title && (
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                    {props.title}
                </h2>
            )}
            <div className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                {props.children}
            </div>
        </div>
    )
}
export default CallToAction;
