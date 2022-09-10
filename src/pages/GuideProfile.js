import ReviewSection from "../components/profile/ReviewSection";
import About from "../components/profile/About";
import style from "../components/Styles/ButtonCenter.module.css";
import styles from "../components/Styles/CompanyProfile.module.css";
import classes from "../components/Styles/TopMargin.module.css";

import CompanyTrips from "../components/profile/CompanyTrips";

import LoadingSpinner from"../UI/LoadingSpinner.js";
import { useParams } from "react-router-dom";
import useHttp from"../hooks/use-http";
import { getSingleGuide } from "../lib/api";
import { useEffect } from "react";



function GuideProfile(props) {

    let params=useParams();
    const{guideId}=params;
  
    const { sendRequest, status, data:loadedguide,error}=useHttp(getSingleGuide,true);
useEffect(()=>{
sendRequest(guideId);
 },[sendRequest,guideId]);

//     if(status =='pending'){
//         return<LoadingSpinner/>
//     }
//     if(error){
//         return <div>{error}</div>

//     }
//     if (status === 'completed' && (!loadedguide || loadedguide.length === 0)) {

//      return <div>no results</div>;
//   
//     }


 
    const images = [
        { id: "1", image: "/Images/certificate/1.png" },
        { id: "2", image: "/Images/certificate/2.jpg" },
        { id: "3", image: "/Images/certificate/3.jpg" },
        { id: "4", image: "/Images/certificate/4.jpg" },
        { id: "5", image: "/Images/certificate/5.jpg" },
        { id: "6", image: "/Images/certificate/6.jpg" },
    ]
    const lang = [
        { id: "1", name: "english" },
        { id: "2", name: "italian" },
        { id: "3", name: "spanish" },
        { id: "4", name: "arabic" },
        { id: "5", name: "spanish" },
        { id: "6", name: "spanish" },


    ]

    return (
        <div className={classes.wrapper}>
            <div className={styles.section}>



                <div className={styles.profImg}>
                    <img src="/Images/userProf.jpg" />


                </div>


                <div className={styles.info}>

                    <h1>Maher Saad Mohamed{props.name}</h1>
                    <span className={styles.city}>Alexandria,Egypt   <span className={styles.rating}>4.5</span></span>
                    <div className={styles.allInfo}>


                        <ul className={styles.infoPoints}>
                            <li>Age:29 {props.age}</li>
                            <li>Phone:+2031141152 {props.phone}</li>
                            <li>Email:TheTravelGuys@gmailcom{props.email}</li>
                            <li>price:500</li>

                        </ul>
                        <div className={styles.about}>

                            <About title="about me" body=" a pioneer travel agency in Egypt have been established in Cairo in 1973 with over 47 years of providing travel services to corporate companies, tour operators, " />
                        </div>
                        <div className={style.buttonCenter}>
                            <button onClick={()=>props.onShowBookGuide()}> Book</button>
                        </div>

                    </div>






                </div>





            </div>


            <div className={styles.section2}>
                <div className={styles.col}>
                    <p className={styles.s2Title}>languages</p>
                    <div className={styles.lang}>

                        {lang.map((l) =>
                            <ul className={styles.langList}>

                                <li alt="trip" key={l.id} id={l.id}>
                                    {l.name}
                                </li>

                            </ul>

                        )
                        }


                    </div>
                </div>





                <div className={styles.col}>
                    <p className={styles.s2Title}>Certificates</p>
                    <div className={styles.skillBox}>
                        {
                            images.map((coverImg) =>
                                <div className={styles.flexRowItem}>

                                    <img src={coverImg.image} alt="trip" key={coverImg.id} id={coverImg.id} />

                                </div>

                            )
                        }
                    </div>



                </div>
            </div>



            <ReviewSection  onAddReview={props.onShowAddRev}/>
          
        </div>
    );
}

export default GuideProfile;