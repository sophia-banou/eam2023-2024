import React from "react";
import { useEffect, useState } from 'react';
import { db } from '../components/firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import { Link } from "react-router-dom";
import { checkAll2, GetCheckboxValue2 } from '../Utils/Methods/index.js';
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Student_bathmologies() {
    var success = 0;
    var fail = 0;
    var sum_of_ects = 0;
    var sum_of_grade = 0;

    var selectedOption1 = "Επιλογή"


    async function getGrade() {
        var user_email = localStorage.getItem("email");

        const ref = doc(db, "users", user_email);
        const res = await getDoc(ref);
        var grades = res.data().grades;

        console.log(grades);
        for (var id = 0; id < grades.length; id++) {

            var period = grades[id].courses;
            console.log(period);

            for (var j = 1; j < period.length; j++) {
                var course = period[j];
                console.log(course);

                if (course.grade >= 5) {
                    sum_of_ects += course.ECTs;
                    sum_of_grade += course.ECTs * course.grade;
                    
                }
            }

        }
        let div = `<div class="div-20"><table class="d-table3"><tr><th>Σύνολο ECTs</th> <th>Μ.Ο βαθμών</th> </tr> <tr><td>${sum_of_ects}</td><td> ${(Math.round((sum_of_grade / sum_of_ects) * 100)) / 100}</td> </tr></table></div>`
        var gib = document.getElementById("grade");
        if (gib) { gib.innerHTML = div; }

    }

    function toggleVisibility() {
        let x = document.getElementById("f-t-container3");
        if (x) {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    }

    function handleDChange1(event) {
        selectedOption1 = event.target.value;
        getCourse();

    }

    async function getCourse() {
        var user_email = localStorage.getItem("email");

        const ref = doc(db, "users", user_email);
        const res = await getDoc(ref);
        var grades = res.data().grades;
        let table = '<div class="grades-b-div">'
        for (var id = 0; id < grades.length; id++) {
            var period = grades[id].courses;
            table += `<div class="mathima-sem-div"> <button>${period[0]}</button> </div>`
            table += '<table class="d-table2">';

            table += '<table class="d-table2"><tr><th class="dcell"> </th><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Βαθμός</th><th class="dcell">ECTs</th></tr>';
            for (var id2 = 1; id2 < period.length; id2++) {
                var name = period[id2].name;
                var grade = period[id2].grade;
                var ects = period[id2].ECTs;

                if ((selectedOption1 === "Επιτυχίες" && grade >= 5) || (selectedOption1 === "Αποτυχίες" && grade < 5) || selectedOption1 === "Επιλογή")
                    table += `<tr><th class="gccell""><input type="checkbox" class="bath" value="${grade}" name="${name}" id="${period[0]}"/></th><th class="gncell">${name}</td><th class="ggcell">${grade}</td><td class="gecell">${ects}</td></tr>`;
            }
            table += '</table><br></br>';
        }
        table += '</div>';
        var gib = document.getElementById("dyn11");
        if (gib) { gib.innerHTML = table; }
    }



    useEffect(() => {
        getCourse();
        getGrade();
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/login2'
        }
    }, [])

    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to="/students">Αρχική / </Link><span>Βαθμολογίες</span></div>
            <div class="title">Βαθμολογίες</div>
            <div class="div9">

                <div class="filter-div">
                    <div class="filter-div1" onClick={toggleVisibility}><div class="filter-div1-button">
                        <div>ΦΙΛΤΡΑ</div>
                        <div>
                            <img src="filter-icon1.png" alter="Filter" class="filter-button-m-icon"></img></div></div> </div>
                    <div class="filter-div2" onClick={checkAll2}> <div class="filter-div2-button">
                        <div>ΕΠΙΛΟΓΗ ΟΛΩΝ</div>
                        <div>
                        </div></div> </div>
                </div>




                <div class="filter-container2" id="f-t-container3">
                    <div class="filter-container2-s">
                        <div class="filter1-choice">
                            <div class="flabel">Προσπάθειες:</div>
                            <div class="optdiv">
                                <select name="tries" onChange={handleDChange1} id="tr-drop">
                                    <option value="Επιλογή" selected={selectedOption1 === "Όλες"}>Επιλέξτε</option>
                                    <option value="Επιτυχίες" selected={selectedOption1 === "Επιτυχίες"}>Επιτυχίες</option>
                                    <option value="Αποτυχίες" selected={selectedOption1 === "Αποτυχίες"}>Αποτυχίες</option>

                                </select>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="d-div2">
                    <div id="dyn11"></div>
                    <div id="grade"></div>
                </div>
                <div class="grades-next-div">
                    <div onClick={GetCheckboxValue2} class="grades-next-div-b">ΠΡΟΕΠΙΣΚΟΠΗΣΗ ΕΚΤΥΠΩΣΗΣ</div>
                </div>
                <h4 class="error1" id="result"></h4>



            </div>
            <Footer />
        </div >


    );
}