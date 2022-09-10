import FilterGuide from "../SubComponents/FilterGuide";
import GCard from "../SubComponents/GCard";
import GuideCard from "../SubComponents/GuideCard";
import styles from "../SubComponents/Trips.module.css";
import Title from "../SubComponents/Title";
import style from "../Styles/TopMargin.module.css";
import Filter from "../SubComponents/Filter";
import styl from "../Styles/textUnderLine.module.css";


import useHttp from"../../hooks/use-http";
import { getAllGuides} from "../../lib/api";
import { useEffect } from "react";


const Guides = (props) => {

  const { sendRequest, status, data:loadedGuides,error}=useHttp(getAllGuides,true);

  useEffect(()=>{

      sendRequest();

  },[sendRequest]);

  // if(status =='pending'){

  //     return<LoadingSpinner/>

  // }

  // if(error){

  //     return <div>{error}</div>
  // }

  //     if (status === 'completed' && (!loadedGuides || loadedGuides.length === 0)) {


  const guides = [
    {
      id:1,
      image: "/Images/ProfilePhotos/da.jpg",
      name: "sara Mohamed ahmed ",
      lang: "English",
      from: "Alexandria",
      rating: "5",
      price: "200 EGP",
    },
    { id:2,
      image: "/Images/userProf.jpg",
      name: "Maher Saad Mohamed",
      lang: "Arabic , German",
      from: "Tanta",
      rating: "4",
      price: "500 EGP",
    },
    {
      id:3,
      image: "/Images/ProfilePhotos/sd.jpg",
      name: "yara anwar",
      lang: "  Arabic ,German",
      from: "Assuit",
      rating: "4",
      price: "400 EGP",
    },
    {
      id:4,
      image: "/Images/ProfilePhotos/hk.jpg",
      name: "Ahmed Mohammed Mahmoud",
      lang: "English , Arabic",
      from: "Cairo",
      rating: "3",
      price: "250 EGP",
    },
  ];
  return (
    <div className={style.wrapper}>
      <h1 className={styl.text}>Guides</h1>

      <FilterGuide />
      <div className={styles.trips}>
        {guides.map((guide) => (
          <GuideCard
            id={guide.id}
            key={guide.id}
            image={guide.image}
            name={guide.name}
            lang={guide.lang}
            from={guide.from}
            rating={guide.rating}
            price={guide.price}
          />
        ))}
      </div>
    </div>
  );
};
export default Guides;
