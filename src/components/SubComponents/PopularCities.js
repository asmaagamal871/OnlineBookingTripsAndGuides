import styles from "./PopularCities.module.css";
import style from "./ImageCard.module.css";
import ImagePopCities from "./ImagePopCities";
import ImageCard from "./ImageCard";
import Button from "../SubComponents/Button";
import Title from "./Title";
import { NavLink } from "react-router-dom";
const PopularCities = () => {
  return (
    <div className={styles.allPopCities}>
      <div>
        <Title h="Popular Cities" />
      </div>
      <div className={styles.allPopularCities}>
        <div className={styles.ContOfImagesPopCities}>
          <ImageCard
            image="/Images/popularCities/alex.png"
            title="alexandria"
            name="alexandria"
          />
          <ImageCard
            image="/Images/popularCities/cairo2.jpg"
            title="cairo"
            name="cairo"
          />
          <ImageCard
            image="/Images/popularCities/aswan.jpg"
            title="aswan"
            name="aswan"
          />
          <ImageCard
            image="/Images/popularCities/luxor.jpg"
            title="luxor"
            name="luxor"
          />
       <ImageCard
            image="/Images/popularCities/sharm2.png"
            title="sharm el sheikh"
            name="sharm el-sheikh"
          /> 
        </div>
        <div className={style.but}>
          <span className={style.cont}>sjhfsdsjlsjssfjl</span>
          <div className={styles.btn}>
          <NavLink activeClassName={styles.active} to="/cities">  <button> cities</button></NavLink>

          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularCities;
