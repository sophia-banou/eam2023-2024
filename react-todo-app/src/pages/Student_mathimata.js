import React from "react";
import { useEffect } from 'react';
import { db } from '../components/firebase.js';
import {Link} from "react-router-dom";
import {doc, getDoc} from 'firebase/firestore'
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Student_mathimata() {

    useEffect(()=> {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    },[])
    async function getCourse (){
        const ref = doc(db, "courses", "all_courses"); 
        const res = await getDoc(ref);

        let table = '<table class="d-tablem">';  
        table += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Εξάμηνο</th><th class="dcell">Κατηγορία</th></tr>';  

        var courses = res.data().courses;

        for (var id = 0; id < courses.length; id++){
            var track = courses[id].track;
            var name = courses[id].name;
            var semester = courses[id].semester;
            var category = courses[id].category;
            table += `<tr class="mathima" data-id="${name}"><td >${name}</td><th>${track}</th><th>${semester}</th><th>${category}</th></tr>`; 
        }
        table += '</table>'; 
        var dil = document.getElementById("mathimata-table");  
        if (dil){ dil.innerHTML = table;}
        jj();
    }

    async function handleClick (e){
        var name = e.currentTarget.dataset.id;
        const ref = doc(db, "courses", "all_courses"); 
        const res = await getDoc(ref);
        var courses = res.data().courses;
        for (var id = 0; id < courses.length; id++){
            if(courses[id].name == name){
                sessionStorage.setItem("m_name",courses[id].name);
                sessionStorage.setItem("m_ects",courses[id].ECTs);
                sessionStorage.setItem("m_book",courses[id].book);
                sessionStorage.setItem("m_category",courses[id].category);
                sessionStorage.setItem("m_eidikeuseis",courses[id].eidikeuseis);
                sessionStorage.setItem("m_id",courses[id].id);
                sessionStorage.setItem("m_name",courses[id].name);
                sessionStorage.setItem("m_proapaitoumena",courses[id].proapaitoumena);
                sessionStorage.setItem("m_professor",courses[id].professor);
                sessionStorage.setItem("m_semester",courses[id].semester);
                sessionStorage.setItem("m_track",courses[id].track);
            }
            console.log(courses[id].name, name);
        }
        
        window.location.assign('/view_mathima');
    }
    function jj(){
        var inputs = document.querySelectorAll('.mathima');
        for (var i = 0; i < inputs.length; i++) {
            var d_el = inputs[i];
            //console.log(d_el);
            d_el.addEventListener('click', handleClick);
        }
    }
    return (
        <div onLoad={getCourse}> 
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to="/students">Αρχική / </Link><span>Μαθήματα</span></div>
            <div class="title">ΜΑΘΗΜΑΤΑ</div>
            <div class="d-div1">  
                <div id="mathimata-table"></div>
            </div>
            <Footer />
        </div>
    );
}