import Saved from "./Saved";
import margin from"../Styles/TopMargin.module.css";
import styles from "../Styles/textUnderLine.module.css";

const SavedPage =()=>{
    const saved = [
        
         
        {
          id:1,
          cover: "/Images/Gallery/alex.png",
          price: "400",
          city: "Cairo",
          place: "Ahramat",
          duration: "4 day",
          date: "22-oct-2022",
          from: "Alexandria",
          company: "Dreams",
          seats:"5",
         
        },
        {
          id:2,
          cover: "/Images/Gallery/Alexandria.png",
          price: "400",
          city: "Alexandria",
          place: "Elmontaza Palace",
          duration: "5 day",
          date: "22-oct-2022",
          from: "Alexandria",
          company: "Dreams",
          seats:"7",
         
        },
        {
          id:3,
          cover: "/Images/Gallery/aswan.png",
          price: "400",
          city: "Aswan",
          place: "Ahramat",
          duration: "1 day",
          date: "22-oct-2022",
          from: "Alexandria",
          company: "Travellgo",
          seats:"1",
         
        },
        {
          id:4,
          cover: "/Images/Gallery/alex.png",
          price: "400",
          city: "Cairo",
          place: "Ahramat",
          duration: "1 day",
          date: "22-oct-2022",
          from: "Alexandria",
          company: "Dreams",
          seats:"15",
         
        },
    
      ];
    
    
return(
<div className={margin.wrapper} >
<h2 className={styles.text}>Saved Trips</h2>
{saved.map((save) => (
          <Saved
           id={save.id}
            key={save.id}
            cover={save.cover}
            price={save.price}
            city={save.city}
            place={save.place}
            duration={save.duration}
            date={save.date}
            from={save.from}
            company={save.company}
            rating={save.rating}
          />

))
}
</div>


)}
export default SavedPage