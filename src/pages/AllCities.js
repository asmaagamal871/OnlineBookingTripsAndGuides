
import CityBlue from "../components/Cities/CityBlue";
import CityTrans from "../components/Cities/CityTrans";
import React from 'react';
import classes from "../components/Styles/TopMargin.module.css";
import styles from "../components/Styles/textUnderLine.module.css";

import LoadingSpinner from"../UI/LoadingSpinner.js";


import useHttp from"../hooks/use-http";

import { getAllCities } from "../lib/api";

import { useEffect } from "react";


function AllCities(props) {

    let cities = [
        {
          id: 1,
          description: "  Giza is most famous as the location of the Giza Plateau, the site of some of the most impressive ancient monuments in the world, including a complex of ancient Egyptian royal mortuary and sacred structures, including the Great Sphinx, the Great Pyramid of Giza, and a number of other large pyramids and temples.",
          city: "Giza",
          image: "/Images/Giza.jpg",
          locations: [{ name: "cover", image: "/Images/Alexandria/cover.jpg", id: 0 }, { name: "Montaza-Palace", image: "/Images/Alexandria/Montaza-palace.jpg", id: 1 }, { name: "biblioteca alexandria", image: "/Images/Alexandria/biblioteca Alexandria.jpg", id: 2 }, { name: "pompey's pillar", image: "/Images/Alexandria/pompey's pillar.jpg", id: 3 }]
    
        }, {
          id: 2,
          description: " Alexandria is a major tourist destination and a year-round seaside resort, with its historical attractions for whoever wishes to visit ancient monuments, get a glimpse at Alexandria's glorious past, or simply spend a sun-savvy vacation enjoying the golden sandy beaches, the shining sun, invigorating sea breeze, and fun-filled entertainment spots.",
          city: "Alexandria",
          image: "/Images/Alexandria.jpg",
          locations: [],
    
        }, {
          id: 3,
          description: "Luxor, once an Ancient Egyptian capital, is known today as the world's greatest open-air museum. From the tomb of Tutankhamen in the Valley of the Kings and the magnificent sunset views at the majestic temple complexes of Karnak and Luxor to the exciting and fun Nile cruises.",
          city: "Luxor",
          image: "/Images/luxor.jpg",
          locations: [],
    
    
        }, {
    
          id: 4,
          description: " Aswan is a serene Nile Valley destination where the Nile is more majestic than anywhere else, flowing through granite rocks, and round emerald islands covered in palm groves and tropical plants.you'll be surprised to see how many monuments and sites this small city has to offer. Consider sailing to the temple of Philae, seeing the Agha Khan Mausoleum and taking an excursion to St. Simeon Monastery.",
          city: "Aswan",
          image: "/Images/Aswan2.jpg",
     
        },
        
    
   
    
      ];
    
    

    const { sendRequest, status, data:loadedCities, error } = useHttp(getAllCities, true);

   

    useEffect(() => {

        sendRequest();

    }, [sendRequest]);

    // if (status == 'pending') {

    //     return<div> loading spinner</div>

    // }

    // if (error) {

    //     return <div>{error}</div>

    // }



    // if (status === 'completed' && (!loadedCities || loadedCities.length === 0)) {

    //     return <div>no quotes found</div>;

    // }




    return (
        <div className={classes.wrapper}>
            <h1 className={styles.text}>Cities</h1>
            {
                cities.map((city) => {
                    if (city.id % 2 === 0) {
                        return (<CityTrans id={city.id} key={city.id} image={city.image} Description={city.description} cityName={city.city} location={props.locations} />)
                    } else {
                        return (

                            <CityBlue id={city.id} key={city.id} image={city.image} Description={city.description} cityName={city.city} location={props.locations} />
                        )
                    }
                }

                )
            }
        </div>






    )
}



export default AllCities;
