import Image from "next/image";
import BadgeType from "./BadgeType";
import React from "react";

type Props = {
    badge: BadgeType
}
const Badges = ({badge}: Props) => {
    return (
        <>
            <a href={"https://www.credly.com/badges/" + badge.id} target="_blank" rel="noreferrer"
               title={badge.badge_template.name}>
                <Image src={badge.badge_template.image.url}
                       className="hover:scale-125" alt="Me" width="180" height="180"/>
            </a>
        </>
    )
}
export default Badges;