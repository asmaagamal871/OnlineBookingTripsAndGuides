
import styles from './ImageCard.module.css';
function ImageCard(props) {

    return (
        <div className={styles.ImageCard}>
            <img src={props.image} alt={props.title} className={styles.cImage}/>
            <p className={styles.lab}>{props.name}</p>

        </div>
    )
}

export default ImageCard;