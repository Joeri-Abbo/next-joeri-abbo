import React, {useEffect, useState} from "react";
import Col3 from "../../Utilities/Col3";
import Project from "../Project";
import Type from "../Type";
import Tag from "./Tag";

type Tags = {
    tags?: any,
};

const Tags = (props: Tags) => {
    return (
        <div className="flex">
            {props.tags.map((tag: any, index: React.Key | null | undefined) => (
                <Tag key={index}>
                    {tag}
                </Tag>
            ))}
        </div>
    )
}
export default Tags;