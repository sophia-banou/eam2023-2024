import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/student_menu.js"
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import "./../css/student_profile.css";
import "./../css/Student_dilosi.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'
import { logo } from "../Utils/Methods/index.js";

export function redir1(){
    window.location.href = '/view_dilwsh';
}

export default function Istoriko() {



    async function getDilwseis(){
        const res = await getDoc(doc(db,"users",localStorage.getItem("email")));
        var d_id = res.data().d_id;

        let table = '<table class="d-table2">';  
        table += '<tr><th class="dcell">Ημερομηνία</th><th class="dcell">Κατάσταση</th><th class="dcell">Ενέργειες</th> ';  

        for (var i=0; i<d_id.length; i++){
            var id = d_id[i];

            const res2 = await getDoc(doc(db,"diloseis",id));

            if (res2.data().status == "Προσωρινή") {
                table += `<tr><td>${res2.data().date} </td><td>${res2.data().status}</td> 
                <td>  <a href='/view_dilwsh'> <img id ="gamw" class="icont" src="./view-icon.png" /> </a>   <a href='/edit_dilwsh'> <img class="icont" src ="./edit-icon2.png">  </a></td></tr>`
            } 
            else{
                table += `<tr><td>${res2.data().date} </td><td>${res2.data().status}</td> 
                <td> <a href='/view_dilwsh'> <img class="icont" src="./view-icon.png" />  </a> <img class="icont" src ="./edit-icon3.png"> </td></tr>`
            }

            
        }
        table += '</table>';   
        var gib = document.getElementById("dyn");  
        if (gib){ gib.innerHTML = table;}

    }

 

    useEffect(() => {
        getDilwseis();  
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    }, [])


    return (
        <div>
            <Nav2 />
            <Menu />
            <div class="table1">
                <h>Δηλώσεις</h>
            </div>
        
            <div id="dyn" class="div-table" ></div>

            <Footer />
        </div>
    );

}
