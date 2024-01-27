import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/student_menu.js"
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import "./../css/istoriko.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'

export default function View_dilwsh() {
    useEffect(()=> {
        //getDilosi();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/login2'
        }
    },[])

    async function getCourses() {


        const res1 = await getDoc(doc(db, "diloseis", sessionStorage.getItem("did")));
        sessionStorage.setItem("ddate", res1.data().date);
        sessionStorage.setItem("dstatus", res1.data().status);

        var courses = res1.data().courses;
        console.log(courses);
        let table = '<table class="d-table2">';
        table += '<tr><th class="dcell">΄Ονομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Εξάμηνο</th> <th class="dcell">Κατηγορία</th> </tr>';
        let c = JSON.parse(courses);


        for (var i = 0; i < c.length; i++) {
            var course = c[i];
            table += `<tr> <td> ${course[0]} </td> <td> ${course[1]} </td> <td> ${course[2]} </td> <td> ${course[3]} </td> </tr>`;
        }

        
        table += '</table>';
        var gib = document.getElementById("dyn-t");
        if (gib) { gib.innerHTML = table; }
    }


    useEffect(() => {
        //getCourses();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    }, [])

    return (

        <div onLoad={getCourses}>

            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to="/students">Αρχική / </Link><Link to="/student_profile">Προφίλ / </Link><Link to="/istoriko">Ιστορικό / </Link><span>Προβολή Δήλωσης</span></div>
            <Link to="/istoriko">
                <img src="back-arrow.png" class="arrow-icon2"></img>
            </Link>
            <div class="div1" >
                <div class="div2">
                    <p> Ημερομηνία Δήλωσης: <span> {sessionStorage.getItem("ddate")}</span> <br></br>
                        Κατάσταση: <span> {sessionStorage.getItem("dstatus")}</span> </p>
                </div>
                <div id="dyn-t" class="div-table" ></div>
            </div>
            <Footer />
        </div>

    );

}