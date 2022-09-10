import styles from "./Card.module.css";
import GuideImageCard from "./GuideImageCard";
import GuideCardDetails from "./GuideCardDetails";
const GCard = (props)=>{
return(
    <div className={`${styles.card} ${styles.border}`}>
    <GuideImageCard image={props.image}
          />
    <GuideCardDetails  
    id={props.id}
     name={props.name}
          lang={props.lang}
          from={props.from}
          rating={props.rating}
          price={props.price} />
    </div>
)
}
export default GCard;