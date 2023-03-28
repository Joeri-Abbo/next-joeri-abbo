import Image from "next/image";
import Type from "./Type";
import React from "react";

type Props = {
    badge: Type
}
const Badge = ({badge}: Props) => {
    return (
        <div key={badge.id}>
            <a href={"https://www.credly.com/badges/" + badge.id} target="_blank" rel="noreferrer"
               title={badge.name}>
                <Image src={badge.image_url}
                       className="m-auto hover:scale-125" alt="Me" width="180" height="180"/>
            </a>
        </div>
    )
}
export default Badge;