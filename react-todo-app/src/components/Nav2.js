import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { db } from './firebase';
import "./../css/HomePage.css";
import "./../css/Nav2.css";
import { logo } from "../Utils/Methods/index.js"
import { profil } from "../Utils/Methods/index.js"

export default function Nav2() {
    useEffect(() => {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') === null) {
            window.location.href = '/'
        }

    }, [])

    return (
        <header class="sticky">
            <div id="header">

                <div id="logo" className="hover">
                    <img src="logo.png" alt="Logo" onClick={logo} />
                </div>
                <nav class="menu2">

                    <div class="menu-item-div">
                        <Link class="link" to='/help'>
                            <span class="menu-item-span"> ΒΟΗΘΕΙΑ</span>
                        </Link>
                    </div>

                    <div class="profile_container" onClick={profil}>
                        <div class="profile-name-div">  <span>{localStorage.getItem("name")} </span></div>
                        <div class="profile-img-div"> <img className="profile-image" alt="" src="/avatar-icon.png" /></div>

                    </div>


                </nav>
            </div>
        </header>
    );
}