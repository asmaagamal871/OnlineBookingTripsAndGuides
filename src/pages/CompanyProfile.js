import style from "../components/Styles/ButtonCenter.module.css";


import ReviewSection from "../components/profile/ReviewSection";
import About from "../components/profile/About";
import ProfileImage from "../components/profile/ProfileImage";
import CompanyTrips from "../components/profile/CompanyTrips";
import styles from "../components/Styles/CompanyProfile.module.css";
import classes from "../components/Styles/TopMargin.module.css";

import LoadingSpinner from"../UI/LoadingSpinner.js";

import { useParams } from "react-router-dom";

import useHttp from"../hooks/use-http";

import { getSingleCompany } from "../lib/api";
import { getCompanyTrips } from "../lib/api";


import { useEffect } from "react";


function CompanyProfile(props) {


    let params =useParams();

const{companyId}=params;




const { sendRequest, status, data:loadedCompany,error}=useHttp(getSingleCompany,true);

useEffect(()=>{

    sendRequest(companyId);

},[sendRequest,companyId]);

// if(status =='pending'){

//     return<LoadingSpinner/>

// }

// if(error){

//     return <div>{error}</div>



// }

// if (status === 'completed' && (!loadedCompany || loadedCompany.length === 0)) {



//     return <div>no results</div>;



// }





const { sendRequest1, status1, data:loadedTrips,error1}=useHttp(getCompanyTrips,true);

useEffect(()=>{

    sendRequest(companyId);

},[sendRequest1,companyId]);

// if(status1 =='pending'){

//     return<LoadingSpinner/>

// }

// if(error1){

//     return <div>{error1}</div>



// }

// if (status1 === 'completed' && (!loadedTrips || loadedTrips.length === 0)) {



//     return <div>no results</div>;



// }


    return (
        <div className={classes.wrapper}>
            <div className={styles.section}>



                <div className={styles.profImg}>
                    <img src="/Images/company/c7.png" />



                </div>


                <div className={styles.info}>

                    <h1>The Travel Guys {props.name}</h1>
                    <span className={styles.city}>Alexandria,Egypt   <span className={styles.rating}>4.5</span></span>
                    <div className={styles.allInfo}>


                        <ul className={styles.infoPoints}>
                            <li>Phone:+20311452 {props.phone}</li>
                            <li>Email:TheTravelGuys@gmailcom{props.email}</li>
                            <li>Address: {props.address}</li>
                        </ul>
                        <div className={styles.about}>

                            <About title="The Travel Guys" body=" a pioneer travel agency in Egypt have been established in Cairo in 1973 with over 47 years of providing travel services to corporate companies, tour operators, " />
                        </div>
                        <div className={style.buttonCenter}>
                        </div>

                    </div>






                </div>
            </div>










            <CompanyTrips />

            <ReviewSection onAddReview={props.onShowAddRev} />
        </div>
    )

}

export default CompanyProfile;