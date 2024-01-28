import React from "react";
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import { Link } from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/teacher_menu.js"
import { doc, getDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'

export default function Oristikopoihsh3() {
    useEffect(() => {
        setBathmologio();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "teacher") {
            window.location.href = '/login2'
        }
    }, [])

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
            status: "Οριστική",
            class_name: sessionStorage.getItem("bath_mathima"),
            date: currentDate,
            professor: localStorage.getItem("email"),

        });



    }



    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to ="/teachers">Αρχική / </Link> <Link to ="/teacher_bathmologia">Βαθμολόγια / </Link><Link to ="/teacher_create">Δημιουργία Βαθμολογίου / </Link><Link to ="/proswrinh2">Προσωρινή Αποθήκευση / </Link><span>Οριστική Υποβολή</span></div>
            <div class="d-div1">
                <div class="message">Το βαθμολόγιο καταχωρήθηκε οριστικά.</div>
                <div class="buttons">
                    <Link class="button1" to="/teachers">
                        <div>Επιστροφή στην Αρχική Σελίδα </div> <img class="home_icon" src="./home-icon.png"></img>
                    </Link>
                </div>
                <div class="buttons">
                    <Link class="button2" to="/teacher_bathmologia">
                        <div>Δείτε το βαθμολόγιο σας </div> 
                    </Link>
                </div>
            </div>


            <Footer />


        </div>


    );


}