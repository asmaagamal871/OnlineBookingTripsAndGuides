import styles from "./Card.module.css";

const GuideImageCard = (props) => {
  return (
    <div className={styles.contanier}>
      <img src={props.image} className={`${styles.image} ${styles.border}`} />
    </div>
  );
};
export default GuideImageCard;
