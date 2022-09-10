import styles from "./PartnersImage.module.css";
import {NavLink} from "react-router-dom";
function PartnersImage (props){

return(

    <div className={`${styles.flexRowItem} ${styles.pImgCard}`}>
        <NavLink to={`/companyProfile/${props.id}`}> 
        <img src={props.image} alt={props.name} className={styles.pImg}/>
        </NavLink>
      
    </div>
)

}

export default PartnersImage;