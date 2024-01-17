import React from "react";
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { db } from './firebase';
import "./../css/HomePage.css";
import "./../css/Nav2.css";
import Button from "./Button1.js";
import { logout } from '../Utils/Methods';

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
                        <li>  <Link to="/help"> <Button /> </Link></li>
                        <li>  
                        <div className='profile_body'>
                            <div className='profile_container'>
                                <div className="profile_div">{localStorage.getItem('email')}
                                    <button onClick={logout} className='logout'>Logout</button>
                                </div>
                                <img className="pimage" alt="" src="/student-icon.png" />
                            </div>
                        </div>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}