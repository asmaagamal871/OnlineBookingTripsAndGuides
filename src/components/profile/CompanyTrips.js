
import ProfileImage from "./ProfileImage";
import styles from "./CompanyTrips.module.css";
import classes from "../Styles/textUnderLine.module.css";
function CompanyTrips(props) {



    const images = [
        { id: "1", image: "/Images/companyTrips/img1.jpg" },
        { id: "2", image: "/Images/companyTrips/img2.jpg" },
        { id: "3", image: "/Images/companyTrips/img3.jpg" },
        { id: "4", image: "/Images/companyTrips/img4.jpg" },
        { id: "5", image: "/Images/companyTrips/img5.jpg" },
        { id: "6", image: "/Images/companyTrips/img6.jpg" },


    ]


    return (
        <div className={styles.companyTrips}>
            <p className={classes.text}>Our Trips</p>
            <div className={styles.flexRow}>

                {
                    images.map((coverImg) =>
                        <div className={styles.flexRowItem}>

                            <img src={coverImg.image} alt="trip" key={coverImg.id} id={coverImg.id} />

                        </div>

                    )
                }

            </div>

        </div>
    )
}

export default CompanyTrips;