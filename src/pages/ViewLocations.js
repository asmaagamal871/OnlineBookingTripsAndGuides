import Cover from "../components/Locations/Cover";
import BlueCard from "../components/Locations/BlueCard";
import GrayCard from "../components/Locations/GrayCard";
import styles from"../components/Styles/textUnderLine.module.css";

import LoadingSpinner from"../UI/LoadingSpinner.js";

import { useParams } from "react-router-dom";

import useHttp from"../hooks/use-http";

import { getAllLocations } from "../lib/api";

import { useEffect } from "react";



function ViewLocations(props){
    
let params =useParams();

const{cityId}=params;




const { sendRequest, status, data:loadedLocations,error}=useHttp(getAllLocations,true);

useEffect(()=>{

    sendRequest(cityId);

},[sendRequest,cityId]);

// if(status =='pending'){

//     return<LoadingSpinner/>

// }

// if(error){

//     return <div>{error}</div>



// }

// if (status === 'completed' && (!loadedLocations || loadedLocations.length === 0)) {



//     return <div>no results</div>;



// }

    return(
        <div>
            <Cover image1="/Images/Alexandria/cover3.jpg"
             
              />

              <p className={styles.text}>places to visit</p>

              {props.location.map((place)=>{
                  if(place.id>0){
                    if(place.id %2 ===0){
                        return (<GrayCard image={place.image} name={place.name} description={place.description} id={place.id} key={place.id}/>)
                    }else{
                        return(
                        <BlueCard image={place.image} name={place.name} description={place.description} id={place.id} key={place.id} />)
                    }
                }
                  }
              )}
              
        </div>
    )
}

export default ViewLocations;