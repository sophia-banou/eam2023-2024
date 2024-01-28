import React from "react";
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import { Link } from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/teacher_menu.js"
import { generateTable3 } from "../Utils/Methods/index.js";
import { doc, getDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'

export default function Proswrinh2() {
    async function setBathmologio() {

        const ref = doc(db, "users", localStorage.getItem("email"));
        const res = await getDoc(ref);
        var grades = res.data().grade_id;


        var new_id = (Date.now()).toString();
        grades.push(new_id.toString());

        let data={
            grade_id: grades
        }
        await updateDoc(ref, data);


        let res3 = sessionStorage.getItem("res3");
      
        console.log(sessionStorage.getItem("res3"));


        var today = new Date();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        var date = today.getDate();
        var currentDate = date + '/' + month + '/' + year;
       
        await setDoc(doc(db, "grades", new_id), {
            id: new_id,
            grades: res3,
            status: "Προσωρινή",
            date: currentDate,
            class_name: sessionStorage.getItem("bath_mathima"),
            professor: localStorage.getItem("email"),

        });



    }
    function showPopup() {
        console.log(document.getElementById("popup-box"));
        document.getElementById("popup-box").style.display = "block";
    }

    function Popup() {
        document.getElementById("popup-b1").addEventListener("click", showPopup);

    }

    function closePopup2(){
        document.getElementById("popup-box").style.display = "none";
    }
    
    function closePopup() {
        document.getElementById("close-popup").addEventListener("click", closePopup2);

    }

    useEffect(() => {
        Popup();
        closePopup();
        setBathmologio();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "teacher") {
            window.location.href = '/login2'
        }
    }, [])



    return (

        <div onLoad={generateTable3}>

            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to ="/teachers">Αρχική / </Link> <Link to ="/teacher_bathmologia">Βαθμολόγια / </Link><Link to ="/teacher_create">Δημιουργία Βαθμολογίου / </Link><span>Προσωρινή Αποθήκευση</span></div>
            <div className='rectangle_long1'>
                <div className="Message_div">Το βαθμολόγιο αυτό δεν έχει οριστικοποιηθεί</div> 
            </div>
            <h3 className="course_title">{sessionStorage.getItem("bath_mathima")}</h3>
            <div class="icon-div">
                    <Link to="/teacher_create" class="arrow-icon">
                        <img src="back-arrow.png" ></img>
                    </Link>
            </div>
            <div class="d-div1">
       
                <div id="dyn24" class="div-table" ></div>

                <div class="warning-message"> <h>Προσοχή!</h> <br></br>Αν πατήσετε οριστική υποβολή δεν θα μπορείτε να επεξεργαστείτε
                    περαιτέρω αυτό το βαθμολόγιο</div>

                <div class="dilosi-pr-div" id="popup-b1">
                    <div class="dilosi-pr-div-b">Οριστική Υποβολή</div>
                </div>

            </div>
            <div id="popup-box" class="modal">
                <div class="content">
                    <img src="warning-icon1.png" alt="Warning" class="popup1-icon"></img>
                    <h1>
                        Είστε σίγουροι ότι θέλετε να προχωρήσετε;
                    </h1>
                    <b>
                        <p>Το βαθμολόγιο θα καταχωρηθεί οριστικά</p>
                    </b>
        
                    <div class="pop-flexbox">
                        <Link class="link" to ="/oristikopoihsh3">
                    <button class="fst-button"> Ναι   
                    </button> </Link>
                    <button class="snd-button" id="close-popup"> Ακύρωση
                    </button>
                    </div>
                </div>
            </div>
            <Footer />


        </div>


    );


}