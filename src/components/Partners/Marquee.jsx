import Microsoft from "../../assets/images/Microsoft-logo.png";
import SUSE from "../../assets/images/suse_logo.jpg";
import Udemy from "../../assets/images/udemy-logo.png";
import TechnoFocus from "../../assets/images/technofocus.png";
// import LevelUp from "../../assets/images/";
import styles from "./Partners.module.css";

export default function Marquee() {
    return (
        <div className={`${styles["marquee-content"]} flex w-max gap-12 items-center py-6`}>
            <div className={styles["partner-logo"]}>
                <img src={Microsoft} alt="Microsoft" />
            </div>
            <div className={styles["partner-logo"]}>
                <img src={SUSE} alt="SUSE" />
            </div>
            <div className={styles["partner-logo"]}>
                <img src={Udemy} alt="Udemy" />
            </div>
            <div className={styles["partner-logo"]}>
                <img src={TechnoFocus} alt="TechnoFocus" />
            </div>
            <div className="partner-logo">
                <img src="YOUR_LEVELUP_IMAGE_HERE" alt="LevelUp" />
            </div>
            <div className={styles["partner-logo"]}>
                <img src={Microsoft} alt="Microsoft" />
            </div>
            <div className={styles["partner-logo"]}>
                <img src={SUSE} alt="SUSE" />
            </div>
            <div className={styles["partner-logo"]}>
                <img src={Udemy} alt="Udemy" />
            </div>
            <div className={styles["partner-logo"]}>
                <img src={TechnoFocus} alt="TechnoFocus" />
            </div>
            <div className="partner-logo">
                <img src="YOUR_LEVELUP_IMAGE_HERE" alt="LevelUp" />
            </div>
        </div>
    )
}