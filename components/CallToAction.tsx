import React from 'react';

type Props = {
    children: React.ReactNode
    title?: string
};
const CallToAction = (props: Props) => {
    return (
        <div className="my-8 text-center">
            {props.title !== null &&
                <span className="text-3xl">
                    {props.title}
                </span>
            }
            {props.children}
        </div>
    )
}
export default CallToAction;