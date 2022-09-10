import styles from "./Details.module.css";
import style from "./ImageCard.module.css";
import Rating from "./Rating";
import Button from "../SubComponents/Button";
import styl from "./ButtonCenter.module.css";
import { NavLink } from "react-router-dom";
const GuideCardDetails = (props) => {
  return (
    <div>
      <div className={styles.flexRow}>
        <p>
          <a href="#">{props.name}</a>
        </p>
        <span className={styles.paragraph}>{props.price}/Day</span>

      </div>

      <div className={`${styles.flexColumn} ${styles.textLeft}`}>
        <span>{props.lang}</span>
        <span>
          From <a href="#">{props.from}</a>
          <Rating tRating={props.rating} />
          <div className={styl.buttonCenter}>
          <NavLink to={`/guideProfile/${props.id}`}>
            <button>View</button>
            </NavLink>
          </div>

        </span>
      </div>
    </div>
  );
};
export default GuideCardDetails;
