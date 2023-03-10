import MarsRover from "../../../public/icons/mars-rover.svg";
import styles from "../../../styles/Footer.module.css";

const RoverWrapper = () => {
    return (
        <div className="overflow-hidden relative h-8 p-0">
            <div>
                <MarsRover className={styles.mars_rover + " w-8 h-8 fill-blue-500 dark:fill-white absolute"}/>
            </div>
        </div>
    )
}
export default RoverWrapper;