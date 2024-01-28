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

function getDate() {
    const today = new Date();
    return today;
}

export default function Istoriko() {
    const [currentDate, setCurrentDate] = useState(getDate());

    async function getDilwseis(){
        const ref1 = doc(db, "prothesmia", "start");
        const res1 = await getDoc(ref1);

        const start_year = res1.data().year
        const start_month = res1.data().month
        const start_day = res1.data().day

        const ref2 = doc(db, "prothesmia", "end");
        const res2 = await getDoc(ref2);

        const end_year = res2.data().year
        const end_month = res2.data().month
        const end_day = res2.data().day

        const start = new Date(start_year, start_month - 1, start_day);
        const end = new Date(end_year, end_month - 1, end_day);
        
        const res = await getDoc(doc(db,"users",localStorage.getItem("email")));
        var d_id = res.data().d_id;

        let table = '<table class="d-table2">';  
        table += '<tr><th class="dcell">Ημερομηνία</th><th class="dcell">Κατάσταση</th><th class="dcell">Ενέργειες</th> ';  

        for (var i=0; i<d_id.length; i++){
            var id = d_id[i];
            
            const ref2 = doc(db,"diloseis",id);
            const res2 = await getDoc(ref2);
            if (res2.data().status == "Προσωρινή") {
                if (start <= currentDate && currentDate <= end) {
                    table += `<tr><td  class="ddcell">${res2.data().date} </td><td class="dscell">${res2.data().status}</td> 
                    <td class="decell"> <img class="vicon" src="./view-icon.png" value=${id} />   <img class="eicon" src ="./edit-icon2.png" value=${id}>  </td></tr>`
                }
                else {
                    var data ={ status: "Ληγμένη"};
                    updateDoc(ref2, data);
                    table += `<tr><td class="ddcell" >${res2.data().date} </td><td class="dscell">${res2.data().status}</td> 
                    <td class="decell" >  <img class="vicon" src="./view-icon.png" value=${id} />  <img class="icont" src ="./edit-icon3.png"> </td></tr>`
                }
                
            } 
            else{
                table += `<tr><td  class="ddcell">${res2.data().date} </td><td class="dscell">${res2.data().status}</td> 
                <td class="decell">  <img class="vicon" src="./view-icon.png" value=${id} />  <img class="icont" src ="./edit-icon3.png"> </td></tr>`
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

       
                table += `<tr><td class="ddcell">${aithsh.date} </td><td class="dscell">${aithsh.category}</td> <td class="decell"> <img  src="./view-icon.png"  /> 
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
            window.location.href = '/login2'
        }
    }, [])


    return (
        <div>
            
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to="/students">Αρχική / </Link><Link to="/student_profile">Προφίλ / </Link><span>Ιστορικό</span></div>
            <Link to="/student_profile">
                    <img src="back-arrow.png" class="arrow-icon2"></img>
            </Link>

         
            <div class="table8">
             <div class="head"> <button> Δηλώσεις </button></div>
            </div>
        
            <div id="dyn" class="div-table" ></div>
            <div class="table8">
            <div class="head"> <button> Πιστοποιητικά </button></div>
            </div>
            <div id="dyn5" class="div-table" ></div>
            <Footer />
        </div>
    );

}
