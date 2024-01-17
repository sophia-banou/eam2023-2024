import React from "react";
import {Link} from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/Nav2.css";
import Button from "./../components/Button1.js";
import SignInButton from "./../components/SignInButton.js";
import HomePage from "../pages/HomePage.js";

export default function Nav2() {
    return (
        <header class="sticky">
            <div id="header">
               
                <div id="logo">
                <Link to="/">
                    <img src="logo.png" alt="Logo" /></Link>
                </div> 
                <nav id="menu">
                    
                    <ul>
                        <li>  <Link to="/help"> <Button /> </Link>
                        <li>  
                        <div className='profile_body'>
                            <div className='profile_container'>
                                <div className="profile_div">Παλιότερες Αιτήσεις και Δηλώσεις</div>
                                <img className="pimage" alt="" src="/aithseis.png" />
                            </div>
                        </div>
                        </li>

                         
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}