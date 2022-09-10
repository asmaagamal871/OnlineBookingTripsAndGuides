import styles from "./Rating.module.css";
import style from "./Details.module.css";
import Share from "./Share";
const Rating = (props) => {
  return (
  <div className={`${style.flexRow} ${style.margin}`}>
    <div className={style.flexRowRating}>
      <img src="/Images/Icon/star.png" className={styles.rImage} />
      <span className={styles.num}>{props.tRating}</span>
    </div>
    <Share/>
    </div>
  );
};
export default Rating;
