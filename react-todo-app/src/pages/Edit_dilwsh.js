import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/student_menu.js"
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import "./../css/istoriko.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'
import { GetCheckboxValue } from '../Utils/Methods/index.js';

export default function Edit_dilwsh() {




    useEffect(() => {
        getCourse();
        getLimit();
        fillChecked();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/login2'
        }
    }, [])

    var limit;

    async function getLimit() {
        var semester = localStorage.getItem("semester");

        const ref = doc(db, "limits", semester);
        const res = await getDoc(ref);
        limit = res.data().mathimata;
    }

    async function handleChange(e) {
        var inputs = document.querySelectorAll('.cb');
        var temp = 0;
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].checked === true) {
                temp++;
            }
        }
        if (temp > limit) {
            e.target.checked = false;
            document.getElementById("result").innerHTML = "Έχετε φτάσει το ανώτατο όριο μαθημάτων για το εξάμηνο σας";
        }
        else {
            document.getElementById("result").innerHTML = null;
        }
    }

    const smonth = localStorage.getItem("startmonth");
    const syear = localStorage.getItem("startyear");
    const sdate = localStorage.getItem("startday");
    const emonth = localStorage.getItem("endmonth");
    const eyear = localStorage.getItem("endyear");
    const edate = localStorage.getItem("endday");
    var start = `${smonth}/${sdate}/${syear}`;
    var end = `${emonth}/${edate}/${eyear}`;

    async function jj() {
        var inputs = document.querySelectorAll('.cb');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('change', handleChange, false);

        }
    }

    async function fillChecked() {
        const res1 = await getDoc(doc(db, "diloseis", sessionStorage.getItem("did")));
        let courses = res1.data().courses;
        courses = JSON.parse(courses);
        
        let courseNames = new Array;
        for (var i = 0; i < courses.length; i++) {
            let course = courses[i];
            
            courseNames.push(course[0]);
        }
        

        let inputs = document.querySelectorAll('.cb');
        for (var i = 0; i < inputs.length; i++) {
            for (var j = 0; j < courseNames.length; j++) {
                if (inputs[i].name == courseNames[j]) {
                    inputs[i].checked = true;
                }
            }
        }
    }

    async function getCourse() {
        const ref = doc(db, "courses", "all_courses");
        const res = await getDoc(ref);

        let table = '<table class="d-table2">';
        table += '<tr><th class="dcell"></th><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Εξάμηνο</th><th class="dcell">Κατηγορία</th></tr>';

        var courses = res.data().courses;

        for (var id = 0; id < courses.length; id++) {
            var track = courses[id].track;
            var name = courses[id].name;
            var semester = courses[id].semester;
            var category = courses[id].category;
            table += `<tr><th><input type="checkbox" class="cb" name="${name}" value="${track}" id="${semester}" title="${category}"/></th><th>${name}</th><th>${track}</th><th>${semester}</th><th>${category}</th></tr>`;
        }
        table += '</table>';
        var dil = document.getElementById("diloseis-table");
        if (dil) { dil.innerHTML = table; }
        jj();
    }

    return (

        <div>

            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to="/students">Αρχική / </Link><Link to="/student_profile">Προφίλ / </Link><Link to="/istoriko">Ιστορικό / </Link><span>Επεξεργασία Δήλωσης</span></div>
            <div>
                <div className='rectangle_long1'>
                    <div className="Message_div">
                        Η προθεσμία δήλωσης μαθημάτων για το χειμερινό εξάμηνο είναι από τις {start} μέχρι τις {end}
                    </div>
                </div>
                <Link to="/istoriko">
                    <img src="back-arrow.png" class="arrow-icon2"></img>
                </Link>
                <div class="d-div1">
                    <div id="diloseis-table"></div>
                </div>
                <div className="dilosi_rectangle1">
                    <div onClick={GetCheckboxValue} className="dilosi_div">Προσωρινή Αποθήκευση</div>
                </div>
                <h4 class="error1" id="result"></h4>
            </div>
            <Footer />
        </div>

    );

}