import Button from "../SubComponents/Button";
import styles from "./DetailsOfSaved.module.css";
import style from "./DetailsOfTrip.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
const DetailsOfSaved = (props) => {
    return (
        <div className={styles.contOfAll}>
            <div className={styles.contOfSavedDetails}>
                <div className={styles.fPart}>
                    <h2 className={styles.head2}>{props.city}</h2>
                    <h3 className={styles.head3}>{props.place}</h3>
                    <p>Company: <a href="#" className={style.companyName}>{props.company}</a></p>
                </div>
                <div className={styles.sPart}>
                    <div className={styles.saveHeart}>
                        {/* <FavoriteIcon/> */}
                    </div>
                    <p>From: {props.from}</p>
                    <p>Duration: {props.duration}</p>
                </div>

            </div>


            
           
        </div>

    )
}
export default DetailsOfSaved;