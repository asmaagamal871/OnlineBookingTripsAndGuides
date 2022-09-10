import Card from "../SubComponents/Card";
import styles from "./TripCard.module.css";
const TripCard = (props) => {
  return (
    <div className={styles.view}>
      <Card 
        id={props.id}
        cover={props.cover}
            price={props.price}
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
export default TripCard;
