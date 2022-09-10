import TripCard from "../SubComponents/TripCard";
import styles from "../SubComponents/Trips.module.css";
import Title from "../SubComponents/Title";
import Filter from "../SubComponents/Filter";
import style from "../Styles/TopMargin.module.css";
import styl from "../Styles/textUnderLine.module.css";
import { useState } from 'react';

import LoadingSpinner from "../../UI/LoadingSpinner.js";

import useHttp from "../../hooks/use-http";
import { getAllTrips } from "../../lib/api";
import { useEffect } from "react";









const Trips = () => {
  // const [filterResults, setFilterResults] = useState([]);

  // function getFilterResults(data) {
  //   setFilterResults(data);
  // }






  const { sendRequest, status, data: loadedTrips, error } = useHttp(getAllTrips, true);

  useEffect(() => {

    sendRequest();

  }, [sendRequest]);

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
      id: 1,
      cover: "/Images/Gallery/aswan.png",
      price: "500",
      city: "Aswan",
      duration: "5 day",
      date: "22-oct-2022",
      from: "Alexandria",
      company: "Dreams",
      rating: "4.5",
    },
    {
      id: 2,
      cover: "/Images/Gallery/Alexandria.png",
      price: "200",
      city: "Alexandria",
      duration: "1 day",
      date: "22-oct-2022",
      from: "Cairo",
      company: "Dreams",
      rating: "3.5",
    },
    {
      id: 3,
      cover: "/Images/Gallery/alex.png",
      price: "300",
      city: "Cairo",
      duration: "1 day",
      date: "16-nov-2022",
      from: "Alexandria",
      company: "Tour",
      rating: "4.0",
    },

    {
      id: 4,
      cover: "/Images/Gallery/abuabas.png",
      price: "600",
      city: "Alexandria",
      duration: "3 day",
      date: "22-oct-2022",
      from: "Alexandria",
      company: "Dreams",
      rating: "4.5",
    },

  ];

  return (
    <div className={`${style.wrapper} ${styles.conterContent}`}>
      {/* {filterResults.length > 0 &&
        <div>
          <h1 className={styl.text}> Filter result</h1>
          <div className={styles.trips}>
            {filterResults.map((trip) => (
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

      } */}



      <h1 className={styl.text}> All Trips</h1>
      {/* <Filter AllTrips={trips} onFilter={getFilterResults} /> */}
      <Filter/>
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
export default Trips;
