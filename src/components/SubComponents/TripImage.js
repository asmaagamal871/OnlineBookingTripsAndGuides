import styles from "./Card.module.css";
const TripImage = (props) => {
  return (
    <div className={styles.contanier}>
      <img src={props.cover} className={`${styles.image} ${styles.border}`} />
      <div className={styles.price}>
        <p>{props.price} EGP</p>
      </div>
    </div>
  );
};
export default TripImage;
