import styles from "./BlueCard.module.css";

function BlueCard(props) {
    return (
        <div className={styles.row}>

            <div className={styles.locInfo}>
                <p className={styles.location}>  {props.name}</p>
                <p> {props.description}</p>
            </div>

            <div className={styles.imgCard}>
                <img className={styles.loc_img} src={props.image} alt={props.name} />

            </div>

        </div>
    )


}

export default BlueCard;