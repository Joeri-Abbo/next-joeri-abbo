import {useEffect, useState} from "react";
import Col6 from "./Utilities/Col6";
import Badge from "./Badge";
import BadgeType from "./BadgeType";

const Badges = () => {

    const [badges, setBadges] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!loading) {
            setLoading(true)
            fetch('badges.json', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setBadges(data.data)
                })
        }
    }, [loading, badges]);

    return (
        <Col6>

            {/*@ts-ignore*/}
            {badges && Object.keys(badges).length > 0 && badges.map((badge: BadgeType, index) => (
                <>
                    <Badge badge={badge}/>
                </>
            ))}
        </Col6>
    )
}
export default Badges;