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


    var selectedOption1 = "Επιλογή";
    var selectedOption2 = "Επιλογή";
    var selectedOption3 = "Επιλογή";

    useEffect(() => {
        getCourse();
        getLimit();
        getfails();
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
            if ((selectedOption1 == semester || selectedOption1 == "Επιλογή")&&(selectedOption2 ==category || selectedOption2=="Επιλογή")
            &&(selectedOption3 ==track || selectedOption3=="Επιλογή")){
                table += `<tr><th><input type="checkbox" class="cb" name="${name}" value="${track}" id="${semester}" title="${category}"/></th><th> <span class="bold">${name} </span></th><th>${track}</th><th>${semester}</th><th>${category}</th></tr>`;
            }
           
        }
        table += '</table>';
        var dil = document.getElementById("diloseis-table");
        if (dil) { dil.innerHTML = table; }
        jj();
    }

    function toggleVisibility() {
        let x = document.getElementById("f-t-container2");
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

    function handleDChange2(event) {
        selectedOption2 = event.target.value;
        getCourse();

    }

    function handleDChange3(event) {
        selectedOption3 = event.target.value;
        getCourse();
    }


    async function getfails() {
        var user_email = localStorage.getItem("email");
    
        const ref = doc(db, "users", user_email); 
        const res = await getDoc(ref);
        var fgrades = res.data().grades;
        let message = '<div class="warning-mes"><span class="hmes">Μήπως θέλετε να δηλώσετε κάποιο από τα εξής; </span>   <ul>';  
        for (var id = 0; id < fgrades.length; id++){
            var period = fgrades[id].courses;
            for (var id2 = 1; id2 < period.length; id2++){
                var grade = period[id2].grade;
                if (grade < 5){
                    message += `<li>  ${period[id2].name}: Σημειώθηκε μη προβιβάσιμος βαθμός (${period[id2].grade}) στην εξεταστική περίοδο ${period[0]} </li> <br> </br>`;
                }
            }
        }
        message += '</ul> </div>'; 
        var gib = document.getElementById("failed_classes2");  
        if (gib){ gib.innerHTML = message;}
    }

    return (

        <div>

            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to="/students">Αρχική / </Link><Link to="/student_profile">Προφίλ / </Link><Link to="/istoriko">Ιστορικό / </Link><span>Επεξεργασία Δήλωσης</span></div>
            <div>
                <div className='rectangle_long1'>
                    <div className="Message_div">
                        Η προθεσμία δήλωσης μαθημάτων για το χειμερινό εξάμηνο είναι από τις {start} μέχρι τις {end}
                    </div>
                </div>
                <Link to="/istoriko">
                    <img src="back-arrow.png" class="arrow-icon2"></img>
                </Link>
                <div class="filter-div-f">
                <div class="filter-div1" onClick={toggleVisibility}><div class="filter-div1-button">
                    <div>ΦΙΛΤΡΑ</div>
                    <div>
                        <img src="filter-icon1.png" alter="Filter" class="filter-button-m-icon"></img></div></div> </div>
            </div>

            <div class="filter-container1" id="f-t-container2">
                <div class="filter-container1-s">
                    <div class="filter1-choice">
                        <div class="flabel">Εξάμηνο:</div>
                        <div class="optdiv">
                            <select name="sem" onChange={handleDChange1} id="sem-drop">
                                <option value="Επιλογή" selected={selectedOption1 === "Επιλογή"}>Επιλέξτε</option>
                                <option value="1o" selected={selectedOption1 === "1o"}>1o</option>
                                <option value="2o" selected={selectedOption1 === "2o"}>2o</option>
                                <option value="3o" selected={selectedOption1 === "3o"}>3o</option>
                                <option value="4o" selected={selectedOption1 === "4o"}>4o</option>
                                <option value="5o" selected={selectedOption1 === "5o"}>5o</option>
                                <option value="6o" selected={selectedOption1 === "6o"}>6o</option>
                                <option value="7o" selected={selectedOption1 === "7o"}>7o</option>
                                <option value="8o" selected={selectedOption1 === "8o"}>8o</option>
                            </select>
                        </div>
                    </div>
                    <div class="filter1-choice">
                        <div class="flabel">Κατηγορία:</div>
                        <div>
                            <select name="cat" onChange={handleDChange2} id="cat-drop">
                                <option value="Επιλογή" selected={selectedOption2 === "Επιλογή"} >Επιλέξτε</option>
                                <option value="Υποχρεωτικό" selected={selectedOption2 === "Υποχρεωτικό"}>Υποχρεωτικό</option>
                                <option value="Αυτοτελές Προαιρετικό Εργαστήριο" selected={selectedOption2 === "Αυτοτελές Προαιρετικό Εργαστήριο"}>Αυτοτελές Προαιρετικό Εργαστήριο</option>
                                <option value="Κατ'Επιλογήν Υποχρεωτικό" selected={selectedOption2 === "Κατ'Επιλογήν Υποχρεωτικό"}>Κατ'Επιλογήν Υποχρεωτικό</option>
                                <option value="Project" selected={selectedOption2 === "Project"}>Project</option>
                                <option value="Γενικής Παιδείας" selected={selectedOption2 === "Γενικής Παιδεία"}>Γενικής Παιδείας</option>
                                <option value="Προαιρετικό" selected={selectedOption2=== "Προαιρετικό"}>Προαιρετικό</option>

                            </select>
                        </div>
                    </div>
                    <div class="filter1-choice">
                        <div class="flabel">Κατεύθυνση:</div>
                        <div>
                            <select name="track" onChange={handleDChange3} id="track-drop">
                                <option value="Επιλογή" selected={selectedOption3 === "Επιλογή"}>Επιλέξτε</option>
                                <option value="Κοινό" selected={selectedOption3 === "Κοινό"}>Κοινό</option>
                                <option value="Α" selected={selectedOption3 === "Α"}>Α</option>
                                <option value="Β" selected={selectedOption3 === "Β"}>B</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
                <div class="d-div2">
                    <div id="diloseis-table"></div>
                    <div id="failed_classes2"></div>
                    <div class="dilosi-pr-div">
                    <div onClick={GetCheckboxValue} class="dilosi-pr-div-b">ΠΡΟΣΩΡΙΝΗ ΑΠΟΘΗΚΕΥΣΗ</div>
            </div>
            <h4 class="error1" id="result"></h4>
                </div>
                
            </div>
            <Footer />
        </div>

    );

}