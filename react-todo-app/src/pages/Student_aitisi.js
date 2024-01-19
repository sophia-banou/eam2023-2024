import React from "react"
import { useEffect } from 'react';
import { db } from '../components/firebase.js';
import {Link} from "react-router-dom";
import './../css/App.css';
import './../css/Student_aitisi.css';
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Student_aitisi() {
    useEffect(()=> {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    },[])

    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to="/students">Αρχική> </Link><span>Αίτηση Πιστοποιητικού</span></div>
            <div className="aitisi_body">
                <div className="aitisi_div2">Κατηγορίες Πιστοποιητικών</div>


                <Link to="/aitisi_students">
                    <div class="aitisi_rectangle1">
                        <div className="aitisi_div">Φοιτητικής Ιδιότητας</div>
                    </div>
                </Link>
                <br></br>
                <Link to="/aitisi_teachers">
                    <div className="aitisi_rectangle1">
                        <div className="aitisi_div">Φορολογικής χρήσης</div>
                    </div>
                </Link>
                <br></br>
                <Link to="/aitisi_teachers">
                    <div className="aitisi_rectangle1">
                        <div className="aitisi_div">Αναλυτική βαθμολογία με προβιβάσιμους βαθμούς</div>
                    </div>
                </Link>
                <br></br>
                <Link to="/aitisi_teachers">
                    <div className="aitisi_rectangle1">
                        <div className="aitisi_div">Στρατολογικής χρήσης</div>
                    </div>
                </Link>
            </div>
            <Footer />
        </div>
    );
}