import ImageCard from "./ImageCard";
import styles from "./CityTrans.module.css";
import { NavLink } from "react-router-dom";
import style from "./ButtonCenter.module.css";

function CityTrans(props) {


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
            <ImageCard image={props.image} title={props.cityName} name={props.cityName} type="white" />

        </div>


    )
}

export default CityTrans;