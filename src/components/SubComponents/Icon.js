import styles from "./Icon.module.css"
const Icon = (props) => {
  return (
  <div className={styles.allCOntent}>
  <img src="./Images/Path.png" alt="icon" className={styles.icon} />
  <p className={styles.num}>{props.number}</p>
  </div>
  );
  
};
export default Icon;
