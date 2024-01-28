import React from "react";
import { useState } from 'react';
import { db } from '../components/firebase.js';
import { Link } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore'
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav1 from "./../components/Nav1.js"
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Student_mathimata() {


    var selectedOption1 = "Επιλογή";
    var selectedOption2 = "Επιλογή";


    async function getCourse() {
        const ref = doc(db, "courses", "all_courses");
        const res = await getDoc(ref);

        let table = '<table class="d-tablem">';
        table += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Κωδικός</th><th class="dcell">Κατηγορία</th></tr>';

        let table2 = '<table class="d-tablem">';
        table2 += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Κωδικός</th><th class="dcell">Κατηγορία</th></tr>';

        let table3 = '<table class="d-tablem">';
        table3 += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Κωδικός</th><th class="dcell">Κατηγορία</th></tr>';

        let table4 = '<table class="d-tablem">';
        table4 += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Κωδικός</th><th class="dcell">Κατηγορία</th></tr>';

        let table5 = '<table class="d-tablem">';
        table5 += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Κωδικός</th><th class="dcell">Κατηγορία</th></tr>';

        let table6 = '<table class="d-tablem">';
        table6 += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Κωδικός</th><th class="dcell">Κατηγορία</th></tr>';

        let table7 = '<table class="d-tablem">';
        table7 += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Κωδικός</th><th class="dcell">Κατηγορία</th></tr>';

        let table8 = '<table class="d-tablem">';
        table8 += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Κωδικός</th><th class="dcell">Κατηγορία</th></tr>';

        var courses = res.data().courses;

        let course_array = new Array();

        for (var id = 0; id < courses.length; id++) {
            var data = {
                track: courses[id].track,
                name: courses[id].name,
                cid: courses[id].id,
                category: courses[id].category,
                semester: courses[id].semester,
            }
            if ((selectedOption1 == data.category || selectedOption1 == "Επιλογή")&&(selectedOption2 ==data.track || selectedOption2=="Επιλογή")){
                course_array.push(data);
        
            }
            
        }


        for (var i = 0; i < course_array.length; i++) {
            if (course_array[i].semester == "1o") {
                table += `<tr class="mathima" data-id="${course_array[i].name}"><td  class="mpcell1">${course_array[i].name}</td><th class="mpcell2">${course_array[i].track}</th><th class="mpcell3">${course_array[i].cid}</th><th class="mpcell4">${course_array[i].category}</th></tr>`;
            }
            else if (course_array[i].semester == "2o") {
                table2 += `<tr class="mathima" data-id="${course_array[i].name}"><td  class="mpcell1">${course_array[i].name}</td><th class="mpcell2">${course_array[i].track}</th><th class="mpcell3">${course_array[i].cid}</th><th class="mpcell4">${course_array[i].category}</th></tr>`;
            }
            else if (course_array[i].semester == "3o") {
                table3 += `<tr class="mathima" data-id="${course_array[i].name}"><td  class="mpcell1">${course_array[i].name}</td><th class="mpcell2">${course_array[i].track}</th><th class="mpcell3">${course_array[i].cid}</th><th class="mpcell4">${course_array[i].category}</th></tr>`;
            }
            else if (course_array[i].semester == "4o") {
                table4 += `<tr class="mathima" data-id="${course_array[i].name}"><td  class="mpcell1">${course_array[i].name}</td><th class="mpcell2">${course_array[i].track}</th><th class="mpcell3">${course_array[i].cid}</th><th class="mpcell4">${course_array[i].category}</th></tr>`;
            }
            else if (course_array[i].semester == "5o") {
                table5 += `<tr class="mathima" data-id="${course_array[i].name}"><td  class="mpcell1">${course_array[i].name}</td><th class="mpcell2">${course_array[i].track}</th><th class="mpcell3">${course_array[i].cid}</th><th class="mpcell4">${course_array[i].category}</th></tr>`;
            }
            else if (course_array[i].semester == "6o") {
                table6 += `<tr class="mathima" data-id="${course_array[i].name}"><td  class="mpcell1">${course_array[i].name}</td><th class="mpcell2">${course_array[i].track}</th><th class="mpcell3">${course_array[i].cid}</th><th class="mpcell4">${course_array[i].category}</th></tr>`;
            }
            else if (course_array[i].semester == "7o") {
                table7 += `<tr class="mathima" data-id="${course_array[i].name}"><td  class="mpcell1">${course_array[i].name}</td><th class="mpcell2">${course_array[i].track}</th><th class="mpcell3">${course_array[i].cid}</th><th class="mpcell4">${course_array[i].category}</th></tr>`;
            }
            else if (course_array[i].semester == "8o") {
                table8 += `<tr class="mathima" data-id="${course_array[i].name}"><td  class="mpcell1">${course_array[i].name}</td><th class="mpcell2">${course_array[i].track}</th><th class="mpcell3">${course_array[i].cid}</th><th class="mpcell4">${course_array[i].category}</th></tr>`;
            }
        }

        table += '</table>';
        table2 += '</table>';
        table3 += '</table>';
        table4 += '</table>';
        table5 += '</table>';
        table6 += '</table>';
        table7 += '</table>';
        table8 += '</table>';
        var dil = document.getElementById("mathimata-table1");
        var dil2 = document.getElementById("mathimata-table2");
        var dil3 = document.getElementById("mathimata-table3");
        var dil4 = document.getElementById("mathimata-table4");
        var dil5 = document.getElementById("mathimata-table5");
        var dil6 = document.getElementById("mathimata-table6");
        var dil7 = document.getElementById("mathimata-table7");
        var dil8 = document.getElementById("mathimata-table8");
        if (dil) { dil.innerHTML = table; }
        if (dil2) { dil2.innerHTML = table2; }
        if (dil3) { dil3.innerHTML = table3; }
        if (dil4) { dil4.innerHTML = table4; }
        if (dil5) { dil5.innerHTML = table5; }
        if (dil6) { dil6.innerHTML = table6; }
        if (dil7) { dil7.innerHTML = table7; }
        if (dil8) { dil8.innerHTML = table8; }



        jj();
    }

    async function handleClick(e) {
        var name = e.currentTarget.dataset.id;
        const ref = doc(db, "courses", "all_courses");
        const res = await getDoc(ref);
        var courses = res.data().courses;
        for (var id = 0; id < courses.length; id++) {
            if (courses[id].name == name) {
                sessionStorage.setItem("m_name", courses[id].name);
                sessionStorage.setItem("m_ects", courses[id].ECTs);
                sessionStorage.setItem("m_book", courses[id].book);
                sessionStorage.setItem("m_category", courses[id].category);
                sessionStorage.setItem("m_eidikeuseis", courses[id].eidikeuseis);
                sessionStorage.setItem("m_id", courses[id].id);
                sessionStorage.setItem("m_name", courses[id].name);
                sessionStorage.setItem("m_proapaitoumena", courses[id].proapaitoumena);
                sessionStorage.setItem("m_professor", courses[id].professor);
                sessionStorage.setItem("m_semester", courses[id].semester);
                sessionStorage.setItem("m_track", courses[id].track);
            }
            console.log(courses[id].name, name);
        }

        window.location.assign('/view_mathima');
    }
    function jj() {
        var inputs = document.querySelectorAll('.mathima');
        for (var i = 0; i < inputs.length; i++) {
            var d_el = inputs[i];
            //console.log(d_el);
            d_el.addEventListener('click', handleClick);
        }
    }
    if (localStorage.getItem('role') === null) {
        var nav = <div> <Nav1 />
        <div class="breadcrumb_body5"><Link to="/">Αρχική / </Link> <span>Μαθήματα</span></div>
    </div>;
        
    } else if (localStorage.getItem('role') === "student"){
        var nav = <div> <Nav2 />
            <Menu />
            <div class="breadcrumb_body5"><Link to="/students">Αρχική / </Link> <span>Μαθήματα</span></div>
        </div>;
    }


    function toggleVisibility() {
        let x = document.getElementById("f-t-container1");
        if (x) {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    }

    function handleDChange1() {
        let option = document.getElementById("sem-drop").value;



        let array = new Array();
        array[0] = document.getElementById("1o");
        array[1] = document.getElementById("2o");
        array[2] = document.getElementById("3o");
        array[3] = document.getElementById("4o");
        array[4] = document.getElementById("5o");
        array[5] = document.getElementById("6o");
        array[6] = document.getElementById("7o");
        array[7] = document.getElementById("8o");

        if (option == "Επιλογή") {
            for (var i = 0; i <= 7; i++) {

                array[i].style.display = "block";
            }
            return;

        }

        for (var i = 0; i <= 7; i++) {
            if (option != array[i].id) {
                array[i].style.display = "none";
            }
            else {
                array[i].style.display = "block";
            }
        }



    }

    
    function handleDChange2(event) {
        selectedOption1 = event.target.value;
        getCourse();

    }

    function handleDChange3(event) {
        selectedOption2 = event.target.value;
        getCourse();
    }


   
    return (
        <div onLoad={getCourse} class="body">
            <div>{nav}</div>

            
            <div class="title">Προπτυχιακά Μαθήματα </div>
            <div class="filter-div">
                <div class="filter-div1" onClick={toggleVisibility}><div class="filter-div1-button">
                    <div>ΦΙΛΤΡΑ</div>
                    <div>
                        <img src="filter-icon1.png" alter="Filter" class="filter-button-m-icon"></img></div></div> </div>
            </div>
            <div class="filter-container1" id="f-t-container1">
                <div class="filter-container1-s">
                    <div class="filter1-choice">
                        <div class="flabel">Εξάμηνο:</div>
                        <div class="optdiv">
                            <select name="sem" onChange={handleDChange1} id="sem-drop">
                                <option value="Επιλογή">Επιλέξτε</option>
                                <option value="1o">1o</option>
                                <option value="2o">2o</option>
                                <option value="3o">3o</option>
                                <option value="4o">4o</option>
                                <option value="5o">5o</option>
                                <option value="6o">6o</option>
                                <option value="7o">7o</option>
                                <option value="8o">8o</option>
                            </select>
                        </div>
                    </div>
                    <div class="filter1-choice">
                        <div class="flabel">Κατηγορία:</div>
                        <div>
                            <select name="cat" onChange={handleDChange2} id="cat-drop">
                                <option value="Επιλογή" selected={selectedOption1 === "Επιλογή"} >Επιλέξτε</option>
                                <option value="Υποχρεωτικό" selected={selectedOption1 === "Υποχρεωτικό"}>Υποχρεωτικό</option>
                                <option value="Αυτοτελές Προαιρετικό Εργαστήριο" selected={selectedOption1 === "Αυτοτελές Προαιρετικό Εργαστήριο"}>Αυτοτελές Προαιρετικό Εργαστήριο</option>
                                <option value="Κατ'Επιλογήν Υποχρεωτικό" selected={selectedOption1 === "Κατ'Επιλογήν Υποχρεωτικό"}>Κατ'Επιλογήν Υποχρεωτικό</option>
                                <option value="Project" selected={selectedOption1 === "Project"}>Project</option>
                                <option value="Γενικής Παιδείας" selected={selectedOption1 === "Γενικής Παιδεία"}>Γενικής Παιδείας</option>
                                <option value="Προαιρετικό" selected={selectedOption1 === "Προαιρετικό"}>Προαιρετικό</option>

                            </select>
                        </div>
                    </div>
                    <div class="filter1-choice">
                        <div class="flabel">Κατεύθυνση:</div>
                        <div>
                            <select name="track" onChange={handleDChange3} id="track-drop">
                                <option value="Επιλογή" selected={selectedOption2 === "Επιλογή"}>Επιλέξτε</option>
                                <option value="Κοινό" selected={selectedOption2 === "Κοινό"}>Κοινό</option>
                                <option value="Α" selected={selectedOption2 === "Α"}>Α</option>
                                <option value="Β" selected={selectedOption2 === "Β"}>B</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mathima-t-div" id="1o">
                <div class="mathima-sem-div">
                    <button>1o Εξάμηνο</button>
                </div>
                <div class="d-div2">
                    <div id="mathimata-table1"></div>
                </div>
            </div>
            <div class="mathima-t-div" id="2o">
                <div class="mathima-sem-div">
                    <button>2o Εξάμηνο</button>
                </div>
                <div class="d-div2">
                    <div id="mathimata-table2"></div>
                </div>
            </div>
            <div class="mathima-t-div" id="3o">
                <div class="mathima-sem-div">
                    <button>3o Εξάμηνο</button>
                </div>
                <div class="d-div2" >
                    <div id="mathimata-table3"></div>
                </div>
            </div>
            <div class="mathima-t-div" id="4o">
                <div class="mathima-sem-div">
                    <button>4o Εξάμηνο</button>
                </div>
                <div class="d-div2" >
                    <div id="mathimata-table4"></div>
                </div>
            </div>
            <div class="mathima-t-div" id="5o">
                <div class="mathima-sem-div">
                    <button>5o Εξάμηνο</button>
                </div>
                <div class="d-div2">
                    <div id="mathimata-table5"></div>
                </div>
            </div>
            <div class="mathima-t-div" id="6o">
                <div class="mathima-sem-div">
                    <button>6o Εξάμηνο</button>
                </div>
                <div class="d-div2">
                    <div id="mathimata-table6"></div>
                </div>
            </div>
            <div class="mathima-t-div" id="7o">
                <div class="mathima-sem-div">
                    <button>7o Εξάμηνο</button>
                </div>
                <div class="d-div2">
                    <div id="mathimata-table7"></div>
                </div>
            </div>
            <div class="mathima-t-div" id="8o">
                <div class="mathima-sem-div">
                    <button>8o Εξάμηνο</button>
                </div>
                <div class="d-div2">
                    <div id="mathimata-table8"></div>
                </div>
            </div>

            <Footer />
        </div>
    );
}