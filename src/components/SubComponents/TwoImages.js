import styles from "./TwoImages.module.css";
const TwoImages = () => {
  return (
    <div className={styles.all}>

      <div className={styles.contOfTwo}>
        <img src="/Images/ProfilePhotos/img1.png" className={styles.i1} />
      </div>
      <div className={styles.contOfTwo}>
        <img src="/Images/ProfilePhotos/img2.png" className={styles.i2} />
      </div>
    </div>
  );
};
export default TwoImages;
