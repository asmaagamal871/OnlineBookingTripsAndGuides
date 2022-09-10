
import Line from"../Styles/textUnderLine.module.css";
import TripCard from "../SubComponents/TripCard";
import styles from "../Styles/UserBookedTrips.module.css";


import Title from "../SubComponents/Title";
import Filter from "../SubComponents/Filter";
import style from "../Styles/TopMargin.module.css";
import styl from "../Styles/textUnderLine.module.css";

import LoadingSpinner from"../../UI/LoadingSpinner.js";

import useHttp from"../../hooks/use-http";
import { getAllTrips } from "../../lib/api";
import { useEffect } from "react";




function UserBookedTrips(){







  const { sendRequest, status, data:loadedTrips,error}=useHttp(getAllTrips,true);

    useEffect(()=>{

        sendRequest();

    },[sendRequest]);

    // if(status =='pending'){

    //     return<LoadingSpinner/>

    // }

    // if(error){

    //     return <div>{error}</div>
    // }

    //     if (status === 'completed' && (!loadedTrips || loadedTrips.length === 0)) {



    //       return <div>no results</div>;
  
   
  
    //   }
    



    const trips = [
    {
      id:1,
      cover: "/Images/Gallery/Alexandria.png",
      price: "100",
      city: "Alexandria",
      duration: "1 day",
      date: "22-oct-2022",
      from: "Cairo",
      company: "Dreams",
      rating: "4.5",
    },
    {
      id:2,
      cover: "/Images/Gallery/cover.png",
      price: "200",
      city: "Cairo",
      duration: "1 day",
      date: "22-oct-2022",
      from: "Alexandria",
      company: "Dreams",
      rating: "4.5",
    },
    {
      id:3,
      cover: "/Images/Gallery/aswan.png",
      price: "700",
      city: "Aswan",
      duration: "1 day",
      date: "22-oct-2022",
      from: "Cairo",
      company: "Dreams",
      rating: "4.5",
    },
    { id:4,
      cover: "/Images/Gallery/cover.png",
      price: "300",
      city: "Cairo",
      duration: "1 day",
      date: "22-oct-2022",
      from: "Alexandria",
      company: "Dreams",
      rating: "4.5",
    },

    {
      id:5,
      cover: "/Images/Gallery/alex.png",
      price: "400",
      city: "Cairo",
      duration: "1 day",
      date: "22-oct-2022",
      from: "Alexandria",
      company: "Dreams",
      rating: "4.5",
    },
    

    {
      id:6,
      cover: "/Images/Gallery/alex.png",
      price: "400",
      city: "Cairo",
      duration: "1 day",
      date: "22-oct-2022",
      from: "Alexandria",
      company: "Dreams",
      rating: "4.5",
    },

    {
      id:7,
      cover: "/Images/Gallery/alex.png",
      price: "400",
      city: "Cairo",
      duration: "1 day",
      date: "22-oct-2022",
      from: "Alexandria",
      company: "Dreams",
      rating: "4.5",
    }

  ];
  
    return (
    // <div className={`${style.wrapper} ${styles.conterContent}`}>
      
    <div className={` ${styles.conterContent}`}>
      
      <h2 className={Line.text}>Booked Trips</h2>
    

      <div className={styles.trips}>
        {trips.map((trip) => (
          <TripCard
           id={trip.id}
            key={trip.id}
            cover={trip.cover}
            price={trip.price}
            city={trip.city}
            duration={trip.duration}
            date={trip.date}
            from={trip.from}
            company={trip.company}
            rating={trip.rating}
          />
        ))}


      </div>
    </div>
  );

        };
export default UserBookedTrips;












