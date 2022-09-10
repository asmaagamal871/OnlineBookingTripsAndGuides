import Button from "../SubComponents/Button";
import styles from "./Text.module.css";
import { NavLink } from "react-router-dom";
import style from "./Bottun.module.css";
import cl from "./ButtonDes.module.css";
const Text = () => {
  return (
    <div className={styles.cont}>
      <h2 className={styles.head}>Think of nothing but having a great time exploring new places

        Check out egypt's most visited cities, pick a guide or a trip and let the adventure begin </h2>
      <div className={styles.containerOfP}>
        <p className={styles.ps}>

        </p>
      </div>
      <div className={styles.containerOfButton}>
        <NavLink activeClassName={styles.active} to="/Trips"><button  className={cl.buttonDes} > Trips
        </button></NavLink>

        <NavLink activeClassName={styles.active} to="guides"><button  className={cl.buttonDes}>Guides</button></NavLink>

      </div>
    </div>
  );
};
export default Text;
