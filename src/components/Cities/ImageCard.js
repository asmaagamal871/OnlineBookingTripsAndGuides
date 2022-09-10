
import styles from './ImageCard.module.css';
function ImageCard(props) {
    let labelStyle = styles.white;
    if (props.type === 'blue') {
        labelStyle = styles.blue;
    }
    return (
        <div className={styles.ImageCard}>
            <img src={props.image} alt={props.title} />
            <p className={labelStyle}>{props.name}</p>

        </div>
    )
}

export default ImageCard;