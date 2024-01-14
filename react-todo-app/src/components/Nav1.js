import React from "react";
import {Link} from "react-router-dom";
import "./../css/App.css";
import Button from "./../components/Button1.js";
import SignInButton from "./../components/SignInButton.js";

export default function Nav1() {
    return (
        <header class="sticky">
            <div id="header">
                <div id="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <nav id="menu">
                    
                    <ul>
                        <li>  <Link to="/help"> <Button /> </Link>
                        <li> <a> <SignInButton /> </a> </li>

                         
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}