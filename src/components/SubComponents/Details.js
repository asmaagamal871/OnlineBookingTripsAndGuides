import styles from "./Details.module.css";
import Rating from "./Rating";
import Button from "../SubComponents/Button";
import style from "./ImageCard.module.css";
import styl from "./ButtonCenter.module.css";
import { NavLink } from "react-router-dom";
const Details = (props) => {

  return (
    <div>
      <div className={styles.flexRow}>
        <h3> <a href="#">{props.city}</a></h3>
        <span className={styles.paragraph}>{props.date}</span>
      </div>

      <div className={`${styles.flexColumn} ${styles.textLeft}`}>
        <span>Duration: {props.duration} </span>
        <span>From <a href="#">{props.from}</a></span>
        <span>Company: <a href="#">{props.company}</a> </span>
        <Rating tRating={props.rating} />
        <div className={styl.buttonCenter}>
          <NavLink to={`/viewTrip/${props.id}`}>
            
            <button content="">View Trip </button>
          </NavLink>
        </div>
      </div>

      <div className={style.but}>

      </div>
    </div>
  );
};
export default Details;
