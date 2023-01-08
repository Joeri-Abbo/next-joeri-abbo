type Tag = {
    children: JSX.Element[] | JSX.Element | string
}

const Project = (tag: Tag) => {

    return (
        <div>
            {tag.children}
        </div>
    )
}
export default Project;