import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/student_menu.js"
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import "./../css/student_profile.css";
import "./../css/Student_dilosi.css";
import "./../css/istoriko.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc, setDoc, collection, getDocs } from 'firebase/firestore'




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
                <td> <img class="vicon" src="./view-icon.png" value=${id} />   <img class="eicon" src ="./edit-icon2.png" value=${id}>  </td></tr>`
            } 
            else{
                table += `<tr><td>${res2.data().date} </td><td>${res2.data().status}</td> 
                <td>  <img class="vicon" src="./view-icon.png" value=${id} />  <img class="icont" src ="./edit-icon3.png"> </td></tr>`
            }
           
            
        }


        table += '</table>';   


        var gib = document.getElementById("dyn");  
        if (gib){ gib.innerHTML = table;}
        jj();

    }


    function handleClick (element){
        console.log(element);
        var value = element.getAttribute("value");
        console.log(element, value);
        sessionStorage.setItem("did",value);
        window.location.assign('/view_dilwsh');
    }

    function handleClick2 (element){
        var value = element.getAttribute("value");
        console.log(element, value);
        sessionStorage.setItem("did",value);
        window.location.assign('/edit_dilwsh');
    }

    function jj(){
        var inputs = document.querySelectorAll('.vicon');
        for (var i = 0; i < inputs.length; i++) {;
            inputs[i].addEventListener('click', (function(e){
                return function() {handleClick(e); };
            }) (inputs[i]),false);
   
        }

        var inputs2 = document.querySelectorAll('.eicon');
        for (var i = 0; i < inputs2.length; i++) {
            inputs2[i].addEventListener('click', (function(e){
                return function() {handleClick2(e); };
            }) (inputs2[i]),false);  
        }

    }

    async function getAitiseis(){

        const res = await getDoc(doc(db,"users",localStorage.getItem("email")));
        let a_array = res.data().aithseis;
        console.log(a_array);

        let table = '<table class="d-table2">';  
        table += '<tr><th class="dcell">Ημερομηνία</th><th class="dcell">Κατηγορία</th><th class="dcell">Ενέργειες</th> ';  

        for (var i=0; i<a_array.length; i++){
            var aithsh = a_array[i];

       
                table += `<tr><td>${aithsh.date} </td><td>${aithsh.category}</td> <td> <img  src="./view-icon.png"  /> 
                <img src="./download-icon.png"  /> </td></tr>`
        } 
        table += '</table>';   
        var gib = document.getElementById("dyn5");  
        if (gib){ gib.innerHTML = table;}

    }

 

    useEffect(() => {
        getDilwseis();
        getAitiseis();
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

            <Link to="/student_profile">
                    <img src="back-arrow.png" class="arrow-icon2"></img>
            </Link>

         
            <div class="table1">
                <h>Δηλώσεις</h>
            </div>
        
            <div id="dyn" class="div-table" ></div>
            <div class="table1">
                <h>Πιστοποιητικά</h>
            </div>
            <div id="dyn5" class="div-table" ></div>
            <Footer />
        </div>
    );

}
