import Type from "./Type";
import React from "react";
import Github from "../../public/icons/github.svg";
import Packagist from "../../public/icons/packagist.svg";
import Link from "next/link";

type Props = {
    item: Type
}
const Package = ({item}: Props) => {
    return (
        <div className={"border-2 p-4"}>
            <div className="font-bold">
                {item.name}
            </div>
            <p className="text-xs my-1">

                {item.description}
            </p>
            <div className="flex gap-2">
                <Link href={item.github_url} target="_blank">
                    <Github className={"w-8 h-8 hover:scale-125 transform-gpu fill-blue-500"}/>
                </Link>
                <Link href={item.url} target="_blank">
                    <Packagist className={"w-8 h-8 hover:scale-125 transform-gpu fill-blue-500"}/>
                </Link>
                <div className={"text-white bg-blue-500 rounded-3xl  w-8 h-8 text-center pt-2 text-xs"}>
                    {item.downloads}
                </div>
            </div>

            {item.tags}
        </div>
    )
}
export default Package;