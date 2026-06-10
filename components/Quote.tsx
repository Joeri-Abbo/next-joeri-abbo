import React from 'react';
import Underline from "../public/underline.svg";

type Props = {
    children: React.ReactNode
    name?: string | null
};
const Quote = (props: Props) => {
    return (
        <figure className="mx-auto my-16 max-w-3xl px-4 text-center">
            <blockquote className="text-2xl font-medium italic leading-snug text-gray-800 dark:text-gray-100 sm:text-3xl">
                &ldquo;{props.children}&rdquo;
            </blockquote>
            {props.name && (
                <figcaption className="mt-5">
                    <span className="block text-sm font-semibold uppercase tracking-wide text-blue-500">
                        {props.name}
                    </span>
                    <Underline className="mx-auto mt-1 w-24 fill-blue-500"/>
                </figcaption>
            )}
        </figure>
    )
}
export default Quote;
