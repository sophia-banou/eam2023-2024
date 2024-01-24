import React from "react";
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import { Link } from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"
import { doc, getDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'

export default function Oristikopoihsh2() {
    useEffect(() => {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    }, [])



    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to="/students">Αρχική / </Link><Link to="/student_aitisi">Αίτηση Πιστοποιητικού / </Link><Link to="/proepiskopisi_aitisis">Προεπισκόπηση / </Link><span>Οριστική Υποβολή</span></div>
            <div class="d-div1">
                <div class="message"> Η αίτηση σας υποβλήθηκε.</div>
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