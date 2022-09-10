import styles from "./Cover.module.css";
const Cover = () => {
  return (
    <div className={styles.allCover}>
      <img
        // src={require("./MicrosoftTeams-image.png")}
        className={styles.cover}
      />
      <div className={styles.head}>
      <h2 >Travelling To EGYPT</h2>
      </div>
    </div>
  );
};
export default Cover;
