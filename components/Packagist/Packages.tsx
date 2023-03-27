import {useEffect, useState} from "react";
import Col6 from "../Utilities/Col6";
import Badge from "./Badge";
import Type from "./Type";

const Badges = () => {
    const [badges, setBadges] = useState<Type[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!loading) {
            setLoading(true)
            fetch('3parties/credly.json', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setBadges(data)
                })
        }
    }, [loading, badges]);

    return (
        <Col6>
            {badges.length > 0 ? (
                badges.map((badge: Type) => (
                    <Badge badge={badge} key={badge.id}/>
                ))
            ) : (
                <div>No badges to display</div>
            )}
        </Col6>
    )
}
export default Badges;