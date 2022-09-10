import styles from "./ImagePopCities.module.css";
const ImagePopCities = (props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.image}>
        <img src={props.image} className={styles.imagePopularCities}  />
        
      </div>
      <p className={styles.titleOfImage}>{props.contentOfImage}</p>
    </div>
  );
};

export default ImagePopCities;
