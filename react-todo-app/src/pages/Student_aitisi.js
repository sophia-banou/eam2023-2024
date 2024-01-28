import React from "react"
import { useEffect, useState } from 'react';
import { db } from '../components/firebase.js';
import { Link } from "react-router-dom";
import './../css/App.css';
import './../css/Student_aitisi.css';
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import { doc, getDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'
import Menu from "./../components/student_menu.js"

export default function Student_aitisi() {
    useEffect(() => {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/login2'
        }
    }, [])

    const [selectedOption, setSelectedOption] = useState("Φοιτητικής Ιδιότητας")

    function onValueChange(event) {
        setSelectedOption(event.target.value)
    }

    async function formSubmit(event) {
        event.preventDefault();
        sessionStorage.setItem("aitisi", selectedOption)
        window.location.href = '/proepiskopisi_aitisis';

    }
    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to="/students">Αρχική / </Link><span>Αίτηση Πιστοποιητικού</span></div>
            <div class="title">Αίτηση Πιστοποιητικού</div>
            <div className="aitisi_body">
                <div class="head"> <button> Κατηγορίες </button></div>

                <form onSubmit={formSubmit}>
                    <div class="aitisi-form-div">
                        <label>
                            <input type="radio" value="Φοιτητικής Ιδιότητας" checked={selectedOption === "Φοιτητικής Ιδιότητας"} onChange={onValueChange} /> <span class="label">Φοιτητικής Ιδιότητας</span>
                        </label>
                        <br />
                        <label>
                            <input type="radio" value="Αναλυτικής βαθμολογίας με προβιβάσιμους βαθμούς" checked={selectedOption === "Αναλυτικής βαθμολογίας με προβιβάσιμους βαθμούς"} onChange={onValueChange} /> <span class="label"> Αναλυτική βαθμολογία με προβιβάσιμους βαθμούς</span>
                        </label>
                        <br />
                        <label>
                            <input type="radio" value="Στρατολογικής χρήσης" checked={selectedOption === "Στρατολογικής χρήσης"} onChange={onValueChange} /> <span class="label">Στρατολογικής χρήσης</span>
                        </label>
                        <br />
                        <label>
                            <input type="radio" value="Φορολογικής χρήσης" checked={selectedOption === "Φορολογικής χρήσης"} onChange={onValueChange} /> <span class="label">Φορολογικής χρήσης </span>
                        </label>
                        <br />
                    </div>
                    <div class="grades-next-div">
                        <button type="submit" class="grades-next-div-b">ΕΠΙΛΟΓΗ</button>
                    </div>
                </form>


            </div>
            <Footer />
        </div>
    );
}