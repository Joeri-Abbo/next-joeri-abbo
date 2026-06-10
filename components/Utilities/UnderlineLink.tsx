import React from 'react';

type Props = {
    children: React.ReactNode
    href: string
};
const UnderlineLink = (props: Props) => {
    const external = props.href.startsWith('http');
    return (
        <a
            href={props.href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="font-medium text-blue-500 underline decoration-blue-500/40 underline-offset-2 transition-colors hover:text-blue-600 hover:decoration-blue-500"
        >
            {props.children}
        </a>
    )
}
export default UnderlineLink;