
import styles from './ProfileImage.module.css';
function ProfileImage(props) {
    return (
        <div className={styles.image}>
            <img className={styles.img} src={props.image}   alt={props.title}/>
        </div>
    )
}

export default ProfileImage;