import {useEffect, useState} from "react";
import Col6 from "./Utilities/Col6";
import Badge from "./Badge";
import BadgeType from "./BadgeType";

const Badges = () => {
    const [badges, setBadges] = useState<BadgeType[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!loading) {
            console.log("Loading badges...")
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
                badges.map((badge: BadgeType) => (
                    <Badge badge={badge} key={badge.id}/>
                ))
            ) : (
                <div>No badges to display</div>
            )}
        </Col6>
    )
}
export default Badges;