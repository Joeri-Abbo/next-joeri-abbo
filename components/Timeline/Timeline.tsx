import Course from "./Item/Course";
import Work from "./Item/Work";
import Feature from "./Item/Feature";
import {useEffect, useState} from "react";
import Type from "./Item/Type";

type Props = {
    src: string
};
const Timeline = (props: Props) => {
    const [items, setItems] = useState<Type[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!loading) {
            setLoading(true)
            fetch(props.src, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setItems(data)
                })
        }
    }, [loading, items, props.src]);

    console.log(items)
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {items.length > 0 ? (
                items.map((item: Type, index) => (
                    <div key={index}>
                        {item.type === "course" && <Course item={item}/>}
                        {item.type === "work" && <Work item={item}/>}
                        {item.type === "feature" && <Feature item={item}/>}
                    </div>
                ))
            ) : (
                <div>No timeline to display</div>
            )}
        </ol>
    )
}
export default Timeline;