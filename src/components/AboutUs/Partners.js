
import PartnersImage from "./PartnersImage";
import styles from "./Partners.module.css";
import style from "../Styles/textUnderLine.module.css";

function Partners(props) {

    const images = [
        { id: "1", image: "/Images/company/c1.jpg" },
        { id: "2", image: "/Images/company/c2.jpg" },
        { id: "3", image: "/Images/company/c3.jpg" },
        { id: "4", image: "/Images/company/c4.jpg" },
        { id: "5", image: "/Images/company/c6.png" },
        { id: "6", image: "/Images/company/c7.png" },
        { id: "7", image: "/Images/company/c9.jpg" }

    ]

    return (
        <div className={styles.allPartners}>

            <p className={style.text}>our partners</p>
            <div className={styles.flexRow}>

                {images.map((profile) => <PartnersImage image={profile.image} alt="travelCo" id={profile.id} key={profile.id} />
                )}
            </div>
        </div>

    )
}

export default Partners;