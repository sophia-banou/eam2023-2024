import React from "react";
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import { Link } from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"
import { generateTable } from "../Utils/Methods/index.js";

export default function Proswrinh1() {
    useEffect(() => {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    }, []);

    return (
        <div onLoad={generateTable}>
            <Nav2 />
            <Menu />

            <div class="d-div1">
                <div id="dyn1" class="div-table" ></div>

                <div class="message"> Η δήλωση σας οριστικοποιήθηκε. Οι προηγούμενες δηλώσεις σας για αυτό το εξάμηνο θα διαγραφούν</div>
                <div class="buttons">
                    <Link class="button" to="/students">
                    <div>Επιστροφή στην Αρχική Σελίδα </div> <img class="home_icon" src="./home-icon.png"></img>
                    </Link>
                </div>
            </div>


            <Footer />


        </div>


    );


}