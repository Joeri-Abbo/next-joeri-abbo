import React from 'react';

type Props = {
    children: React.ReactNode;
    subtitle?: React.ReactNode;
    id?: string;
};

const SectionTitle = (props: Props) => {
    return (
        <div id={props.id} className="mt-20 mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {props.children}
            </h2>
            <span className="mx-auto mt-3 block h-1 w-16 rounded bg-blue-500"/>
            {props.subtitle && (
                <p className="mx-auto mt-4 max-w-2xl text-gray-500 dark:text-gray-400">
                    {props.subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
