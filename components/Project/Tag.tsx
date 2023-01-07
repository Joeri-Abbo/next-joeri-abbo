import React, {useId} from 'react'

type Tag = {
    children: JSX.Element[] | JSX.Element | string
}

const Project = (tag: Tag) => {
    const id = useId();

    return (
        <div>
            {tag.children}
        </div>
    )
}
export default Project;