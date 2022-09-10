import styles from "./Card.module.css";
import Details from "./Details";
import TripImage from "../SubComponents/TripImage";
const Card = (props) => {
  return (
    <div className={`${styles.card} ${styles.border}`}>
      <TripImage cover={props.cover} price={props.price} />
      <Details
       id={props.id}
        city={props.city}
        duration={props.duration}
        date={props.date}
        from={props.from}
        company={props.company}
        rating={props.rating}
      />
    </div>
  );
};
export default Card;
