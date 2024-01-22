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

        for (var i = 0; i < d_id.length; i++) {
            const ref2 = doc(db, "diloseis", d_id[i]);
            const res2 = await getDoc(ref2);

            if (res2.data().period == current_period) {
                await deleteDoc(doc(db, "diloseis", res2.data().id));
                var new_id = d_id[i];
                flag=false;
                break;
            }
            else {
                var new_id = Date.now();
            }
        }
        
        if(d_id.length ==0){
            var new_id = Date.now();
        }
        if (flag != false){
            d_id.push(new_id.toString());
        }
       
        var courses = sessionStorage.getItem("res");

        var data = {
            d_id: d_id,
        };

        await updateDoc(ref, data);

        var new_id2 = new_id.toString();


        var today = new Date();
        var month = today.getMonth()+1;
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

    useEffect(() => {
        setDilwsh();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    }, [])



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