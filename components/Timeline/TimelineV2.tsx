import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Type from "./Item/Type";
import Graduation from "../../public/icons/graduation-cap-solid.svg";
import ItemWrapper from "./Wrapper/Item";
import Title from "./Utilities/Title";
import Time from "./Utilities/Time";
import Text from "./Utilities/Text";
import Download from "./Button/Download";
import External from "./Button/External";
import Briefcase from "../../public/icons/briefcase-solid.svg";

import Sparkles from "../../public/icons/sparkles-solid.svg"

type Props = {
    src: string
};

const TimelineV2 = (props: Props) => {
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
        <div className="flex flex-col items-center w-full">
            <div className="relative w-full max-w-4xl">
                <div className="absolute inset-0 flex justify-center">
                    <div className="w-0.5 bg-blue-500 h-full"></div>
                </div>

                {items.map((item: Type, index) => (
                    <div key={index}
                         className={`flex w-full ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className="relative flex lg:w-1/2 items-center w-full">

                            <div className="z-10 bg-white pt-1 rounded shadow-lg m-8 w-full dark:bg-gray-800 dark:shadow-gray-900">
                                <ItemWrapper>
                               <span
                                   className={"hidden lg:flex absolute h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900 " + (index % 2 === 0 ? "-left-3" : "-right-3")}>

                                            <div>
                                                {item.type === "course" && <Graduation
                                                    className="h-4 w-4 transform-gpu fill-blue-500 hover:scale-125"/>}
                                                {item.type === "work" && <Briefcase
                                                    className="h-4 w-4 transform-gpu fill-blue-500 hover:scale-125"/>}
                                                {item.type === "feature" && <Sparkles
                                                    className="h-4 w-4 transform-gpu fill-blue-500 hover:scale-125"/>}

                                            </div>

                               </span>
                                    <Title tags={item.tags}>
                                        {item.title}
                                    </Title>
                                    <Time>
                                        {item.time}
                                    </Time>
                                    <Text>
                                        {item.description}
                                    </Text>

                                    <div className="flex flex-wrap gap-2">
                                        <Download href={item.downloadHref}/>
                                        <External href={item.externalHref}/>
                                    </div>
                                </ItemWrapper>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimelineV2;
