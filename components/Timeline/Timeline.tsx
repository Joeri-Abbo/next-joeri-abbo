import Course from "./Item/Course";
import Work from "./Item/Work";
import Feature from "./Item/Feature";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Type from "./Item/Type";

type Props = {
    src: string
};
const Timeline = (props: Props) => {
    const {t} = useTranslation();
    const [items, setItems] = useState<Type[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;
        setLoading(true);
        fetch(props.src, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (active) {
                    setItems(data);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error fetching timeline data:', error);
                if (active) setLoading(false);
            });
        return () => {
            active = false;
        };
    }, [props.src]);

    if (loading && items.length === 0) {
        return <p className="py-8 text-center text-gray-500 dark:text-gray-400">{t('timeline.loading')}</p>;
    }

    if (items.length === 0) {
        return <p className="py-8 text-center text-gray-500 dark:text-gray-400">{t('timeline.empty')}</p>;
    }

    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {items.map((item: Type, index) => (
                <div key={index}>
                    {item.type === "course" && <Course item={item}/>}
                    {item.type === "work" && <Work item={item}/>}
                    {item.type === "feature" && <Feature item={item}/>}
                </div>
            ))}
        </ol>
    )
}
export default Timeline;
