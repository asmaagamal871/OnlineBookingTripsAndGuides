import styles from "../SubComponents/DetailsOfTrip.module.css";
import Button from "../SubComponents/Button";
import { NavLink } from "react-router-dom";
import react, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

const DetailsOfTrip = (props) => {
  return (
    <div className={styles.contDiv}>
      <div className={styles.contOfHeaders}>
        <h2 className={styles.head2}>ALexandria</h2>
       
        <a className={styles.heart}>
        <FavoriteIcon style={{color:"red"}} />

        </a>
        <div className={styles.flexx}>
          <div className={styles.dateAndDuration}>
            <p className={styles.pss}>22-oct-2022</p>
            <p className={styles.pss}>3 Days</p>
          </div>
          <div className={styles.priceAndSeats}>
            <p className={styles.pss}>400 EGP</p>
            <p className={styles.pss}>20 seats left</p>
          </div>
        </div>
        <p className={`${styles.placeDis} ${styles.placeDis} ${styles.pss} `}>
         Alexandria is a major tourist destination and a year-round seaside resort,
         with its historical attractions for whoever wishes to visit ancient monuments, 
         get a glimpse at Alexandria's glorious past, or simply spend a sun-savvy vacation enjoying 
         the golden sandy beaches, the shining sun, invigorating sea breeze, and fun-filled entertainment
         
         spots.
        
        </p>
        <p className={styles.pss}>
          Company:
          <a href="#" className={styles.companyName}>
            Dreams
          </a>
        </p>
        <div className={styles.button}>
          {/* <NavLink to="/viewTrip">
            <button onClick={()=>props.onBook()}>book now</button>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};
export default DetailsOfTrip;
