import DetailsOfTrip from "../SubComponents/DetailsOfTrip";
import Gallery from "../SubComponents/Gallery";
import styles from "../SubComponents/ViewTrip.module.css";
import DescriptionOfTrip from "../SubComponents/DescriptionOfTrip";

import style from "../Styles/TopMargin.module.css";
import LoadingSpinner from"../../UI/LoadingSpinner.js";
import { useParams } from "react-router-dom";
import useHttp from"../../hooks/use-http";
import { getSingleTrip } from "../../lib/api";
import { useEffect } from "react";



const ViewTrip = (props) => {
    let params =useParams();
    const{tripId}=params;
   

    const { sendRequest, status, data:loadedTrip,error}=useHttp(getSingleTrip,true);
    useEffect(()=>{
        sendRequest(tripId);
    },[sendRequest,tripId]);
    // if(status =='pending'){
    //     return<LoadingSpinner/>
    // }
    // if(error){
    //     return <div>{error}</div>

    // }
    // if (status === 'completed' && (!loadedTrip || loadedTrip.length === 0)) {

    //     return <div>no results</div>;
  
    // }




    return (
        <div className={style.wrapper}>
<div className={styles.Buttt}>
            <div className={styles.allViewTrip}>
                <Gallery />
                <DetailsOfTrip onBook={props.onShowBookTrip}/>
                
            </div>
            <button onClick={()=>props.onShowBookTrip()}>book now</button>
            
            </div>
            
            <DescriptionOfTrip />
        </div>
    )
}
export default ViewTrip