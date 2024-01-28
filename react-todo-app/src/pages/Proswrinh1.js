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
import { doc, getDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'

export default function Proswrinh1() {
    async function setDilwsh() {

        const ref = doc(db, "users", localStorage.getItem("email"));
        const res = await getDoc(ref);
        var d_id = res.data().d_id;
        var current_period = res.data().current_period;
        var flag = true;

        console.log(d_id);

        for (var i = 0; i < d_id.length; i++) {
            const ref2 = doc(db, "diloseis", d_id[i]);
            const res2 = await getDoc(ref2);

            if (res2.data().period == current_period) {
                console.log(res2.data())
                await deleteDoc(doc(db, "diloseis", res2.data().id));
                var new_id = d_id[i];
                flag = false;
                break;
            }
            else {
                var new_id = Date.now();
            }
        }

        if (d_id.length == 0) {
            var new_id = Date.now();
        }
        if (flag != false) {
            d_id.push(new_id.toString());
        }

        var courses = sessionStorage.getItem("res").split(',');

        var data = {
            d_id: d_id,
        };

        console.log(data);
        await updateDoc(ref, data);

        var new_id2 = new_id.toString();


        var today = new Date();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        var date = today.getDate();
        var currentDate = date + '/' + month + '/' + year;


        await setDoc(doc(db, "diloseis", new_id2), {

            courses: courses,
            period: current_period,
            date: currentDate,
            status: "Προσωρινή",
            id: new_id.toString(),
            user: localStorage.getItem("email")
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
        setDilwsh();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/login2'
        }
    }, [])



    return (

        <div onLoad={generateTable}>

            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to="/students">Αρχική / </Link><Link to="/student_bathmologies">Δήλωση μαθημάτων / </Link><span>Προσωρινή αποθήκευση</span></div>
            <div className='rectangle_long1'>
                <div className="Message_div">
                    Η δήλωση σας δεν έχει οριστικοποιηθεί.
                </div>
            </div>
            <div class="icon-div">
                <Link to="/student_dilosi" class="arrow-icon">
                    <img src="back-arrow.png" ></img>
                </Link>
            </div>

            <div class="d-div1">

                <div id="dyn10" class="div-table" ></div>

                <div class="warning-message"> <h>Προσοχή!</h> <br></br>Αν πατήσετε οριστική υποβολή δεν θα μπορείτε να επεξεργαστείτε
                    περαιτέρω αυτήν την δήλωση.</div>



                <div class="dilosi-pr-div" id="popup-b1">
                    <div class="dilosi-pr-div-b">ΟΡΙΣΤΙΚΗ ΥΠΟΒΟΛΗ</div>
                </div>

            </div>


            <div id="popup-box" class="modal">
                <div class="content">
                    <img src="warning-icon1.png" alt="Warning" class="popup1-icon"></img>
                    <h1>
                        Είστε σίγουροι ότι θέλετε να προχωρήσετε;
                    </h1>
                    <b>
                        <p>Η αίτηση σας θα οριστικοποιηθεί</p>
                    </b>
        
                    <div class="pop-flexbox">
                        <Link class="link" to ="/oristikopoihsh1">
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