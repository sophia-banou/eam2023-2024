import React from "react";
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import { Link } from "react-router-dom";
import { generateTable2 } from "../Utils/Methods/index.js";
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Proeskopisi() {
    useEffect(() => {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    }, []);

    return (
        <div onLoad={generateTable2}>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to="/students">Αρχική / </Link><Link to="/student_bathmologies">Βαθμολογίες / </Link><span>Προεπισκόπιση</span></div>
            <div class="icon-div">
                <Link to="/student_bathmologies">
                    <img src="back-arrow.png" class="arrow-icon"></img>
                </Link>
            </div>

            <div class="d-div1">
                <div id="dyn12" class="div-table" ></div>
                <div className="dilosi_rectangle1">
                    <div className="dilosi_div">
                        Εκτύπωση 🖨️
                    </div>
                </div>
            </div>
            <Footer />


        </div>


    );


}