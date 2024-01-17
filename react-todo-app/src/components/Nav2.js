import React from "react";
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { db } from './firebase';
import "./../css/HomePage.css";
import "./../css/Nav2.css";
import {Button2} from "./Button1.js";

export default function Nav2() {
    useEffect(()=> {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
        
    },[])

    return (
        <header class="sticky">
            <div id="header">
               
                <div id="logo">
                <Link to="/">
                    <img src="logo.png" alt="Logo" /></Link>
                </div> 
                <nav id="menu">
                    
                    <ul>
                        <li>  <Link to="/help"> <Button2 /> </Link></li>
                        <li>  
                        <Link to="/student_profile">
                        <div className='profile_body'>
                            <div className='profile_container'>
                                <div className="profile_div">{localStorage.getItem("name")}
                                </div>
                                <img className="pimage" alt="" src="/profile-icon.png" />
                            </div> 
                        </div>
                        </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}