
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import GuideSkills from './pages/Forms/GuideSkills';
import AboutUs from './pages/AboutUs';
import AllCities from './pages/AllCities';
import CompanyProfile from './pages/CompanyProfile';
import GuideProfile from './pages/GuideProfile';
import SignUp from "./pages/Forms/SignUp.js";

import Login from "./pages/Forms/LoginFrom";
import ViewLocations from "./pages/ViewLocations";
import UserProfile from './pages/Userprofile';
import AddTrip from "./pages/Forms/AddTrip";

import BookGuide from "./pages/Forms/BookGuide";
import BookTrip from "./pages/Forms/BookTrip";
import CompanyProfileInfo from "./pages/Forms/CompanyProfileInfo";
import TravellerProfileInfo from "./pages/Forms/TravellerProfileInfo";
import GuideProfileInfo from "./pages/Forms/GuideProfileInfo";
import Payment from "./pages/Forms/Payment";

import Home from "./components/Pages/Home.js";
import Saved from "./components/Pages/Saved";
import Trips from "./components/Pages/Trips.js";
import Guides from "./components/Pages/Guides";
import ViewTrip from './components/Pages/ViewTrip';
import SavedPage from './components/Pages/SavedPage';
import AddReviewForm from './pages/Forms/AddReviewForm';
import UserProfileFinal from './pages/UserProfileFinal';


import {useState} from'react';


function App() {



  //signup
  async function AddUserHandler(user) {
    console.log(user);

    const response = await fetch('https://reqres.in/api/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });



    const data = await response.json();
    console.log(data);


  }
  //login
  async function UserLoginHandler(user) {
    console.log(user);
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });



    const data = await response.json();
    console.log(data);
  }


  //companyProfileInfo

  async function CompanyProfileHandler(Info) {
    console.log(Info);
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(Info),
      headers: {
        'Content-Type': 'application/json'
      }
    });



    const data = await response.json();
    console.log(data);
  }




  //guideProfileInfo

  async function GuideProfileHandler(Info) {
    console.log(Info);
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(Info),
      headers: {
        'Content-Type': 'application/json'
      }
    });



    const data = await response.json();
    console.log(data);
  }




  //TravellerprofileInfo


  async function TravellerProfileHandler(Info) {
    console.log(Info);
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(Info),
      headers: {
        'Content-Type': 'application/json'
      }
    });



    const data = await response.json();
    console.log(data);
  }

  //AddTrip
  async function AddTripHandler(Info) {
    console.log(Info);
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(Info),
      headers: {
        'Content-Type': 'application/json'
      }
    });



    const data = await response.json();
    console.log(data);
  }

  //payment
  async function PaymentHandler(Info) {
    console.log(Info);
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(Info),
      headers: {
        'Content-Type': 'application/json'
      }
    });



    const data = await response.json();
    console.log(data);
  }

  //BookGuide
  async function BookGuideHandler(bookingData) {
    console.log(bookingData);
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(bookingData),
      headers: {
        'Content-Type': 'application/json'
      }
    });



    const data = await response.json();
    console.log(data);
  }

  //BookGuide
  async function BookTripHandler(bookingData) {
    console.log(bookingData);
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(bookingData),
      headers: {
        'Content-Type': 'application/json'
      }
    });



    const data = await response.json();
    console.log(data);
  }

  //AddReview

  async function AddReviewHandler(rev) {
    console.log(rev);
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(rev),
      headers: {
        'Content-Type': 'application/json'
      }
    });



    const data = await response.json();
    console.log(data);
  }


  //<CompanyProfileInfo onAddCompany={CompanyProfileHandler}/>
  //<TravellerProfileInfo onAddTraveller={TravellerProfileHandler}/>
  //<SignUp onAddUser={AddUserHandler}/>
  // <LoginForm onUserLogin={UserLoginHandler}/>
  //<GuideProfileInfo onAddGuide={GuideProfileHandler}/>
  //<AddTrip onAddTrip={AddTripHandler}/>


  const [LoginlIsShown,setLoginIsShown]=useState(false);

  const showLoginHandler=()=>{
    setLoginIsShown(true);
  
  }


  const hideLogin=()=>{
      console.log("bye");
    setLoginIsShown(false);

  }
  const [SignUpIsShown,setSignUpIsShown]=useState(false);

  const showSignUpHandler=()=>{
    setSignUpIsShown(true);
  
  }


  const hideSignUp=()=>{
      console.log("bye");
    setSignUpIsShown(false);

  }
  const [BookTripIsShown,setBookTripIsShown]=useState(false);

  const showBookTripHandler=()=>{
    setBookTripIsShown(true);
  
  }


  const hideBookTrip=()=>{
      console.log("bye");
    setBookTripIsShown(false);

  }
  const [BookGuideIsShown,setBookGuideIsShown]=useState(false);

  const showBookGuideHandler=()=>{
    setBookGuideIsShown(true);
  
  }


  const hideBookGuide=()=>{
      console.log("bye");
    setBookGuideIsShown(false);

  }

  const [AddReviewIsShown,setAddReviewIsShown]=useState(false);

  const showAddReviewHandler=()=>{
    setAddReviewIsShown(true);
  
  }


  const hideAddReviewGuide=()=>{
      console.log("bye");
    setAddReviewIsShown(false);

  }



 
  const locations = [
    { name: "cover", image: "/Images/Alexandria/cover3.jpg" },
    { name: "Montaza-Palace", image: "/Images/Alexandria/Montaza-palace.jpg", description: "a beautiful property that overlooks Al Montaza Gulf. The complex also contains five beaches for swimming: Aida, Cleopatra, Vanessa, Semiramis, and the private beach of Helnan Palestine Hotel.There's all sorts of fun to be had in Montaza. One great option is to take a boat ride and see the gardens from the water. Other awesome marine activities are waterskiing, diving, snorkeling, or even just chilling out in front of the ocean.", id: 1 }

    , {
      name: "biblioteca alexandria", image: "/Images/Alexandria/biblioteca Alexandria.jpg",
      description: "is a major library and cultural center on the shore of the Mediterranean Sea in the Egyptian city of Alexandria. It is a commemoration of the Library of Alexandria, once one of the largest libraries worldwide, which was lost in antiquity. The idea of reviving the old library dates back to 1974", id: 2
    },
    { name: "pompey's pillar", image: "/Images/Alexandria/pompey's pillar.jpg", description: "It is a huge column of red granite, with a total height of about 28 meters and a base diameter of 2.7m. On the upper part at the western side is an inscription in Greek, which reads: 'to the most just Emperor, tutelary of Alexandria Diocletian, the invincible, Postumus, the Prefect of Egypt (who erected this monument).", id: 3 }]
    
    

  //<AllCities AllCity={cities}/>
  //   <ViewLocations location={locations}/>

  // <AllCities AllCity={cities}/>

  return (
    <div className="App">

      <Navbar onShowLogin={showLoginHandler}  onShowSignUp={showSignUpHandler} />

      {LoginlIsShown && <Login onHide={hideLogin} onUserLogin={UserLoginHandler}/>}
      {SignUpIsShown && <SignUp onHide={hideSignUp} onAddUser={AddUserHandler}/>}
      {BookTripIsShown &&<BookTrip onHide={hideBookTrip} onBookTrip={BookTripHandler}/>}
      {BookGuideIsShown &&<BookGuide onHide={hideBookGuide} onBookGuide={BookGuideHandler}/>}

      {AddReviewIsShown &&<AddReviewForm onHide={hideAddReviewGuide} onAddRev={AddReviewHandler}/>}


      <Switch>



        <Route path="/About" exact>
          <AboutUs />
        </Route>



        <Route path="/Trips" exact>
          <Trips />
        </Route>

        <Route path="/viewTrip/:tripId" exact>
          <ViewTrip onShowBookTrip={showBookTripHandler}/>

        </Route>

        <Route path="/cities" exact>
          <AllCities />
        </Route>

        <Route path="/cities/locations/2" exact>
          <ViewLocations location={locations} />
        </Route>

        <Route path="/guides" exact>
          <Guides />
        </Route>

        <Route path="/guideProfile/:guideId" exact>
          <GuideProfile onShowBookGuide={showBookGuideHandler}  onShowAddRev={showAddReviewHandler}/>

        </Route>



        <Route path="/UserProfile/:userId" exact>
         <UserProfileFinal/>
        </Route>

        <Route path="/companyProfile/:companyId" exact>
          <CompanyProfile onShowAddRev={showAddReviewHandler} />

        </Route>

        <Route path="/"exact={true}>
          <Home />
        </Route>

        <Route path="/savedTrips/:userId">
          <SavedPage />
        </Route>






      </Switch>


      



    </div>

  );
}

export default App;
