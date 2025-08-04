import React from 'react';

type Props = {
    children: React.ReactNode
    href: string
};
const UnderlineLink = (props: Props) => {
    return (
        <>
            <a href={props.href} className="underline">
                {props.children}
            </a>
        </>
    )
}
export default UnderlineLink;