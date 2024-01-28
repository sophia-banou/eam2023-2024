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

export default function Oristikopoihsh1() {
    async function setDilwsh() {

        const ref = doc(db, "users", localStorage.getItem("email"));
        const res = await getDoc(ref);

        var d_id = res.data().d_id;
        var current_period = res.data().current_period;
        var flag = true;
        console.log(d_id)
        
        for (var i = 0; i < d_id.length; i++) {
            const ref2 = doc(db, "diloseis", d_id[i]);
            const res2 = await getDoc(ref2);
           

            if (res2.data().period == current_period) {
                console.log(res2.data().id)
                await deleteDoc(doc(db, "diloseis", res2.data().id));
                var new_id = d_id[i];
                flag=false;
                break;
            }
            else {
                var rand = Date.now()
                var new_id = rand;
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
            status: "Οριστική",
            id: new_id.toString(),
            user: localStorage.getItem("email"),
        });



    }

    useEffect(() => {
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
            <div className="breadcrumb_body5"><Link to="/students">Αρχική / </Link><Link to="/student_dilosi">Δήλωση μαθημάτων / </Link><Link to="/proswrinh1">Προσωρινή αποθήκευση / </Link><span>Οριστική Υποβολή</span></div>
            <div class="d-div1">
                <div id="dyn10" class="div-table" ></div>

                <div class="message"> Η δήλωση σας οριστικοποιήθηκε. Οι προηγούμενες δηλώσεις σας για αυτό το εξάμηνο θα διαγραφούν</div>
                <div class="buttons">
                    <Link class="button1" to="/students">
                        <div>Επιστροφή στην Αρχική Σελίδα </div> <img class="home_icon" src="./home-icon.png"></img>
                    </Link>
                    <Link class="button2" to="/istoriko">
                        <div>Δείτε την δήλωση σας</div> <img class="home_icon" src="./dilosi_white.png"></img>
                    </Link>
                </div>
            </div>


            <Footer />


        </div>


    );


}