import styles from "../Styles/UserBookedTrips.module.css";
import GuideCard from "../SubComponents/GuideCard";
import Line from"../Styles/textUnderLine.module.css";

function UserBookedGuides(){

    const guides = [
        {
          id:1,
          image: "/Images/ProfilePhotos/da.jpg",
          name: "Sara Ibrahem Mohamed",
          lang: "English",
          from: "Alexandria",
          rating: "5",
          price: "200",
        },
        { id:2,
          image: "/Images/ProfilePhotos/sd.jpg",
          name: "Manar Saad Mohamed",
          lang: "German",
          from: "Assuit",
          rating: "4",
          price: "500",
        },
        {
          id:3,
          image: "/Images/ProfilePhotos/hk.jpg",
          name: "Maher Saad Mohamed",
          lang: "German",
          from: "Assuit",
          rating: "4",
          price: "500",
        },
        {
          id:4,
          image: "/Images/ProfilePhotos/hk.jpg",
          name: "Ahmed Mohammed Mahmoud",
          lang: "English",
          from: "Cairo",
          rating: "3",
          price: "250",
        },
      ];


    return(


<div className={` ${styles.conterContent}`}>

<h2 className={Line.text}>Booked Guides</h2>

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
    )
}

export default UserBookedGuides;