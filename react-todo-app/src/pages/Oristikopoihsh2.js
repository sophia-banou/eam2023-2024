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
        setAithsh();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/login2'
        }
    }, [])

    async function setAithsh(){
        const ref = doc(db, "users", localStorage.getItem("email"));
        const res1 = await getDoc(ref);

        let selectedOption = sessionStorage.getItem("aitisi");
        console.log(selectedOption);
        var today = new Date();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        var date = today.getDate();
        var currentDate = date + '/' + month + '/' + year;

        let aithsh = {
            date: currentDate,
            category: selectedOption
        }
        
        let a_array = res1.data().aithseis;
        a_array.push(aithsh);

        let data ={
            aithseis: a_array
        }

        await updateDoc(ref, data);

    }



    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to="/students">Αρχική / </Link><Link to="/student_aitisi">Αίτηση Πιστοποιητικού / </Link><Link to="/proepiskopisi_aitisis">Προεπισκόπηση / </Link><span>Οριστική Υποβολή</span></div>
            <div class="d-div1">
                <div class="message"> Η αίτηση σας υποβλήθηκε.</div>
                <div class="buttons">
                    <Link class="button1" to="/students">
                        <div>ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΑΡΧΙΚΗ ΣΕΛΙΔΑ </div> <img class="home_icon" src="./home-icon.png"></img>
                    </Link>
                </div>
                <div class="buttons">
                    <Link class="button2" to="/istoriko">
                        <div>ΔΕΙΤΕ ΤΟ ΠΙΣΤΟΠΟΙΗΤΙΚΟ ΣΑΣ </div> 
                        <img class="home_icon" src="pistopoihtiko2.png"></img>
                    </Link>
                </div>
            </div>


            <Footer />


        </div>


    );


}