import styles from "./SavedCard.module.css";
import SavedImageCard from "./SavedImageCard";
import DetailsOfSaved from "./DetailsOfSaved";
import FavoriteIcon from '@mui/icons-material/Favorite';

const SavedCard = (props) => {
  return (
    <div className={styles.savedCard}>
      <SavedImageCard cover={props.cover} />
      <DetailsOfSaved
        city={props.city}
        place={props.place}
        company={props.company}
        from={props.from}
        seatsLeft={props.seatsLeft}
        duration={props.duration}
      />
      
      <div>
                        <FavoriteIcon style={{color:"red"}} />
                        
      <button>view</button>
      </div>
    </div>
  );
};
export default SavedCard;
