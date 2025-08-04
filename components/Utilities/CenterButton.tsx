import React from 'react';
import Button from "./Button";

type Props = {
    children: React.ReactNode
    href: string
};
const CenterButton = (props: Props) => {
    return (
        <div className={"flex justify-center"}>
            <Button href={props.href}>
                {props.children}
            </Button>
        </div>
    )
}
export default CenterButton;