import React from "react"
import { useEffect, useState } from 'react';
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/teacher_menu.js"
import "./../css/student_profile.css";
import { db } from '../components/firebase.js';
import {doc, getDoc} from 'firebase/firestore';
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";


export default function Teacher_mathimata() {
    async function getCourses (){
        var user_email = localStorage.getItem("email");
    
        const ref = doc(db, "users", user_email); 
        const res = await getDoc(ref);
        var courses = res.data().courses;
        let table = '<div>';
        for (var id = 0; id < courses.length; id++){
            table += '<table class="d-table2">';  
            table += `<tr><th class="dcell">${courses[id].name}</th></tr></table>`;
            table += `<table class="d-table2"><tr><th>Τμήμα</th><td>${courses[id].department}</td></tr>`;
            table += `<tr><th>Σπουδές</th><td>${courses[id].studies}</td></tr>`;
            table += `<tr><th>Κωδικός μαθήματος</th><td>${courses[id].id}</td></tr>`;
            table += `<tr><th>Εξάμηνο</th><td>${courses[id].semester}</td></tr>`;
            table += `<tr><th>Τύπος μαθήματος</th><td>${courses[id].category}</td></tr>`;
            table += `<tr><th>Κατεύθυνση</th><td>${courses[id].track}</td></tr>`;
            table += `<tr><th>Αρ.Εγγεγραμμένων Φοιτητών</th><td>${courses[id].numofstudents}</td></tr>`;
            table += `<tr><th>Ημ.Υποβολής Τελευταίου Βαθμολογίου</th><td>${5}</td></tr>`;
            table += '</table><br/>'; 
        }
        table += '</div>';
        var gib = document.getElementById("dyn20");  
        if (gib){ gib.innerHTML = table;}  
    }
    useEffect(()=> {
        getCourses();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "teacher") {
            window.location.href = '/'
        }
    },[])

    return (
        <div>
            <Nav2 />
            <Menu />
            <div class="tm-div1"> 
                <div className="breadcrumb_body2"><Link to ="/teachers">Αρχική / </Link> <span>Μαθήματα</span></div>
                <div id="dyn20"></div>
            </div>
            <Footer />

        </div >

    )
}