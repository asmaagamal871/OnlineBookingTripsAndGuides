import styles from "./CityBlue.module.css";
import ImageCard from "./ImageCard";
import { NavLink } from "react-router-dom";
import style from "./ButtonCenter.module.css";



function CityBlue(props) {


    return (
        <div className={styles.row}>
            <div className={styles.description}>
                <p>
                    {props.Description}
                        </p>
                <div className={style.buttonCenter}>
                    <NavLink activeClassName={styles.active} to={`cities/locations/${props.id}`}> <button>View</button></NavLink>
                </div>
            </div>
            <ImageCard image={props.image} title={props.cityName} name={props.cityName} type="blue" />

        </div>


    )
}

export default CityBlue;