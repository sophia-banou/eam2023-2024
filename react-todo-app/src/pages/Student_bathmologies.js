import React from "react";
import { useEffect } from 'react';
import { db } from '../components/firebase.js';
import {doc, getDoc} from 'firebase/firestore'
import {Link} from "react-router-dom";
import {checkAll, getChecked} from '../Utils/Methods/index.js';
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Student_dilosi() {
    
    async function getCourse (){
        var user_email = localStorage.getItem("email");
    
        const ref = doc(db, "users", user_email); 
        const res = await getDoc(ref);

        let table = '<table class="d-table2">';  
        table += '<tr><th class="dcell"></th><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Βαθμός</th><th class="dcell">Εξεταστική περίοδος</th></tr>';  

        var courses = res.data().courses;

        for (var id = 0; id < courses.length; id++){
            var grade = courses[id].grade;
            var name = courses[id].name;
            var period = courses[id].period;
            table += `<tr><th><input type="checkbox" class="bath" value="${grade}" name="${name}" id="${period}"/></th><th>${name}</td><th>${grade}</td><td>${period}</td></tr>`; 
        }
        table += '</table>'; 
        var gib = document.getElementById("dyn3");  
        if (gib){ gib.innerHTML = table;}
    }
    useEffect(()=> {
        getCourse();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    },[])

    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to="/students">Αρχική / </Link><span>Βαθμολογίες</span></div>
            <div class="d-div1">  
            <div class="button-div"> <button onClick={checkAll}> Επιλογή Όλων</button> </div>     
            <div id="dyn3"></div>
            <Link to="/proeskopisi">
                <div className="dilosi_rectangle1">
                    <div className="dilosi_div">Επόμενο➜</div>
                </div> 
            </Link>
            </div>
            <h4 class="error1" id="result"></h4>  
            <Footer />
        </div>
    );
}