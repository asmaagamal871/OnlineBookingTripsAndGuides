import styles from "./SavedImageCard.module.css";
const SavedImageCard = (props) => {
    return (
        <div className={styles.dImageOfSaved}>
            <img src={props.cover} className={styles.imageOfSaved} />

        </div>)
}
export default SavedImageCard;