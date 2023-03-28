import {useEffect, useState} from "react";
import Col4 from "../Utilities/Col4";
import Type from "./Type";
import Package from "./Package";

const Packages = () => {
    const [packages, setPackages] = useState<Type[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!loading) {
            setLoading(true)
            fetch('3parties/packagist.json', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setPackages(data)
                })
        }
    }, [loading, packages]);

    return (
        <Col4>
            {packages.length > 0 ? (
                packages.map((item: Type, index) => (
                    <Package item={item} key={index}/>
                ))
            ) : (
                <div>No package to display</div>
            )}
        </Col4>
    )
}
export default Packages;