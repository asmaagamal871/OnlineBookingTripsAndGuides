
import styles from './ReviewCard.module.css';
function ReviewCard(props) {
    
 
    return (
        <div className={`${styles.flexRowItem} ${styles.card}`}>
            <p>" {props.review}  "</p>
            <div className={styles.row}>
                <div className={styles.image}>
                <img src={props.image} alt="profile" />
                </div>
               
              
               
            <p className={styles.userName}>{props.name}</p>
            </div>
            
    </div>
)


}

export default ReviewCard;