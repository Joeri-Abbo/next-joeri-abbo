import ChildrenType from "../../Utilities/ChildrenType";

const Main = (props: ChildrenType) => {
    return (
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col">
            <main className="container mx-auto mt-6 flex-grow px-4 sm:px-6">
                {props.children}
            </main>
        </div>
    )
}
export default Main;