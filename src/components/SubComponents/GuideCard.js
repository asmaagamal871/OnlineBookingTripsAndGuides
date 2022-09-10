import styles from "./TripCard.module.css";
import Guides from "../Pages/Guides";
import Filter from "./Filter";
import GCard from "./GCard";
const GuideCard = (props) => {
 
  return (
  
    <div className={styles.view}>
      <GCard 
      id={props.id}
      key={props.id}
      image={props.image}
      name={props.name}
      lang={props.lang}
      from={props.from}
      rating={props.rating}
      price={props.price}
      />
     </div>
    
  );
};
export default GuideCard;
