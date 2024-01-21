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
import { doc, getDoc, updateDoc, patchDoc } from 'firebase/firestore'

export default function Proswrinh1() {
    useEffect(() => {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    }, []);

    // const ref1 = doc(db, "users", localStorage.getItem("email"));
    // const res1 = getDoc(ref1);
    // var id_table = res1.data("dilosh_id");

    // var id = Math.random();
    // id_table.push(id);

    // var data = {
    //     dilosh_id: id_table,
    // }
    // updateDoc(ref1, data);



    // sessionStorage.setItem("date1", new Date().toDateString());
    // sessionStorage.setItem("status1", "Προσωρινή");



    return (
        <div onLoad={generateTable}>
            <Nav2 />
            <Menu />
            <div class="icon-div">
                <Link to="/student_dilosi">
                    <img src="back-arrow.png" class="arrow-icon"></img>
                </Link>
            </div>

            <div class="d-div1">
                <div id="dyn1" class="div-table" ></div>

                <div class="warning-message"> <h>Προσοχή!</h> <br></br>Αν πατήσετε οριστική υποβολή δεν θα μπορείτε να επεξεργαστείτε
                    περαιτέρω αυτήν την δήλωση</div>

                <Link class="link" to="/oristikopoihsh1">
                    <div className="dilosi_rectangle1">
                        <div className="dilosi_div">

                            Οριστική Υποβολή
                        </div>
                    </div>
                </Link>
            </div>
            <Footer />


        </div>


    );


}