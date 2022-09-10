import SavedCard from "../SubComponents/SavedCard";
import styles from "../SubComponents/Saved.module.css";
const Saved = (props) => {
  return (
    <div className={styles.saved}>
    
      <SavedCard
        cover={props.cover}
        city={props.city}
        place={props.place}
        company={props.company}
        from={props.from}
        seatsLeft={props.seatsLeft}
        duration={props.duration}
      />
    </div>
  );
};
export default Saved;
