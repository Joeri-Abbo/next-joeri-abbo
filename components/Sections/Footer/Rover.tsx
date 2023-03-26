import MarsRover from "../../../public/icons/mars-rover.svg";
import styles from "../../../styles/Footer.module.css";

const Rover = () => {
    return (
        <div className="relative h-8 overflow-hidden p-0">
            <div>
                <MarsRover
                    className={styles.mars_rover + " animate-duration-30s animate-delay-2s animate-iteration-continuous animate-ease-in-out repeat-infinite left-[50px] absolute w-8 h-8 fill-blue-500 dark:fill-white absolute"}/>
            </div>
        </div>
    )
}
export default Rover;