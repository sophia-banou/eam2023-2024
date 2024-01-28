import React from "react";
import { Link } from "react-router-dom";
import "./../css/HomePage.css";
import Button from "./../components/Button1.js";
import SignInButton from "./../components/SignInButton.js";


export default function Nav1() {
    return (
        <header class="sticky">
            <div id="header">

                <div id="logo">
                    <Link to="/">
                        <img src="logo.png" alt="Logo" /></Link>
                </div>
                <div class="menu">
                    <div class="menu-item-div">
                        <Link class="link" to='/student_mathimata'>
                            <span class="menu-item-span"> ΜΑΘΗΜΑΤΑ</span>
                        </Link>
                    </div>

                    <div class="menu-item-div">
                        <Link class="link" to='/help'>
                            <span class="menu-item-span"> ΒΟΗΘΕΙΑ</span>
                        </Link>
                    </div>


                    <div class="menu-item-div">
                        <Link class="link" to='/login'>
                            <span class="menu-item-span"> ΣΥΝΔΕΣΗ</span>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}