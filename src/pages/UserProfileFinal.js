import UserBookedTrips from "../components/Pages/UserBookedTrips";
import UserBookedGuides from"../components/Pages/UserBookedGuides";
import UserProfile from "./Userprofile";









function UserProfileFinal(){
return(
    <div>


<UserProfile/>
<UserBookedTrips/>

<UserBookedGuides/>
    </div>
)

}

export default UserProfileFinal;