import styles from "../components/Styles/UserProfile.module.css";
import {NavLink} from "react-router-dom";
import TripCard from "../components/SubComponents/TripCard";

import stl from"../components/SubComponents/Trips.module.css";
import UserBookedTrips from "../components/Pages/UserBookedTrips";
import UserBookedGuides from"../components/Pages/UserBookedTrips";

// "../../SubComponents/Trips.module.css";

function UserProfile(props) {

   
    return (
        <div  className={styles.flexCont}>



<div>


<div className={styles.Profsection}>

            

<div className={styles.UserImg}>
    <img src="/Images/userProf.jpg" />
    </div>





                <div className={styles.Userinfo}>

                    <h1>Adam Ahmed {props.name}</h1>
                
                    <div className={styles.userNav}>


                        <ul className={styles.Navitems}>
                       
                            <li>
                                <NavLink to="/savedTrips/:userId">

                                <button>saved</button>
                                </NavLink>
                                </li>

                           
                        </ul>

                    </div>

                </div>



        </div>

       
<div>

  
</div>
{/* <div>

</div>
  <UserBookedTrips/>

</div>

<UserBookedGuides/> */}
</div>

           </div>
    )

}


export default UserProfile;