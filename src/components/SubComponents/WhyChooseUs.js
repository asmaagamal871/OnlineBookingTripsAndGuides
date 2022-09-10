import Icon from "./Icon";
import styles from './WhyChooseUs.module.css'
// import PartOne from "./partOne";
import PartOne from "./PartOn";
import TwoImages from "./TwoImages";
const WhyChooseUs = () => {
    return (
        <div className={styles.allWhyChooseUs}>
            <h2 className={styles.headOfWhyChooseUs}>Why choose us?</h2>
            <div className={styles.containerOfTwo}>
                <PartOne />
                <TwoImages />
            </div>
        </div>
    )

}
export default WhyChooseUs;