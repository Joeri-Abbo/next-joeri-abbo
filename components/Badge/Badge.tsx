import Image from "next/image";
import Type from "./Type";
import React from "react";

type Props = {
    badge: Type
}
const Badges = ({badge}: Props) => {
    return (
        <div key={badge.id}>
            <a href={"https://www.credly.com/badges/" + badge.id} target="_blank" rel="noreferrer"
               title={badge.name}>
                <Image src={badge.image_url}
                       className="hover:scale-125 m-auto" alt="Me" width="180" height="180"/>
            </a>
        </div>
    )
}
export default Badges;