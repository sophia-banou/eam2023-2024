import React from "react";
import {Link} from "react-router-dom";
import "./../css/HomePage.css";
import Button from "./../components/Button1.js";
import SignInButton from "./../components/SignInButton.js";
import HomePage from "../pages/HomePage.js";

export default function Nav1() {
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
                        <li>  <Link to="/login"> <SignInButton />  </Link></li>

                         
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}