import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginForm from "../../pages/Forms/LoginFrom";
import { StrictMode } from "react";

function Navbar(props){
    // const [modalIsShown,setModalIsShown]=useState(false);

    // const showModalHandler=()=>{
    //   setModalIsShown(true);
    // }
  
  
    // const hidenModal=()=>{
    //     console.log("hiiiiiiiiiiiii");
    //   setModalIsShown(false);
    //   console.log(modalIsShown);
    // }
    

    return(
        <div className={styles.navCont}>
            <div className={styles.logo}>
                nomads
            </div>
            <div className={styles.navSearch}>
                <input className={styles.searchInput} type="text" placeholder="search"/>
                <div><SearchIcon style ={{color:"white"}} /></div>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navItems}>
                    <li> <NavLink  to="/">Home</NavLink></li>
                    <li> <NavLink activeClassName={styles.active} to="/cities">cities</NavLink></li>
                    <li> <NavLink activeClassName={styles.active} to="/Trips">Trips</NavLink></li>
                    <li> <NavLink activeClassName={styles.active} to="/guides">Guides</NavLink></li>
                    <li> <NavLink activeClassName={styles.active} to="/UserProfile/:userId">profile</NavLink></li>
                    <div className={styles.log}>
                    <li> <LogoutIcon style={{color:"white"}}></LogoutIcon> </li>
                    </div>
                    {/* <li><button className={styles.navBtn} onClick={()=>props.onShowLogin()}>login</button></li> */}
                    {/* <li><button className={styles.navBtn} onClick={()=>props.onShowSignUp()}>sign up</button></li> */}
                 
                  


                

                   
                    


                
                    {/* <li> <NavLink activeClassName={styles.active} to="/guideProfile">GuideProfile</NavLink></li>
                    <li> <NavLink activeClassName={styles.active} to="/About">AboutUs</NavLink></li>

                    */}
                   
                </ul>
            </nav>
        </div>
    )

}




export default Navbar;