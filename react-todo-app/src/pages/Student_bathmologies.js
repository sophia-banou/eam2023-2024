import React from "react";
import { useEffect, useState } from 'react';
import { db } from '../components/firebase.js';
import {doc, getDoc} from 'firebase/firestore'
import {Link} from "react-router-dom";
import {checkAll, GetCheckboxValue2} from '../Utils/Methods/index.js';
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Student_dilosi() {
    var success = 0;
    var fail = 0;

    function getSuccess(){
        success = 1;
        fail = 0;
        getCourse();
    }
    function getFail(){
        success = 0;
        fail = 1;
        getCourse();
    }
    function getAll(){
        success = 0;
        fail = 0;
        getCourse();
    }
    function Button(props) {
        return (
            <button className="st-b-button" onClick={props.onClick}>
            <div className="st-b-button-div">Ταξινόμηση</div>
            </button>
        );
    }
    function Dropdown(props) {
        return (
        <div>
            {props.isVisible ? (
            <div className="st-b-dropdown">
                <div onClick={getAll} className="st-b-dropdown-div">Όλα</div>
                <div onClick={getSuccess} className="st-b-dropdown-div">Επιτυχίες</div>
                <div onClick={getFail} className="st-b-dropdown-div">Αποτυχίες</div>
            </div>
            ) : null}
        </div>
        );
    }

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    
    async function getCourse (){
        var user_email = localStorage.getItem("email");
    
        const ref = doc(db, "users", user_email); 
        const res = await getDoc(ref);

        let table = '<table class="d-table2">';  
        table += '<tr><th class="dcell"> <input type ="checkbox" id="checkall"> </th><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Βαθμός</th><th class="dcell">Εξεταστική περίοδος</th></tr>';  

        var courses = res.data().courses;

        for (var id = 0; id < courses.length; id++){
            if (success === 0 && fail === 0){
                var grade = courses[id].grade;
                var name = courses[id].name;
                var period = courses[id].period;
                table += `<tr><th><input type="checkbox" class="bath" value="${grade}" name="${name}" id="${period}"/></th><th>${name}</td><th>${grade}</td><td>${period}</td></tr>`;
            }
            else if (success === 1 && fail === 0){
                var grade = courses[id].grade;
                var name = courses[id].name;
                var period = courses[id].period;
                if (grade >= 5){
                    table += `<tr><th><input type="checkbox" class="bath" value="${grade}" name="${name}" id="${period}"/></th><th>${name}</td><th>${grade}</td><td>${period}</td></tr>`;
                }
            }
            else if (success === 0 && fail === 1){
                var grade = courses[id].grade;
                var name = courses[id].name;
                var period = courses[id].period;
                if (grade < 5){
                    table += `<tr><th><input type="checkbox" class="bath" value="${grade}" name="${name}" id="${period}"/></th><th>${name}</td><th>${grade}</td><td>${period}</td></tr>`;
                }
            }
        }
        table += '</table>'; 
        var gib = document.getElementById("dyn11");  
        if (gib){ gib.innerHTML = table;}
        jj();   
    }

    function jj(){
        var input = document.getElementById("checkall");
        input.addEventListener('change',checkAll);
    }

    // async function getChecked (){
    //     let table = '<table class="d-table2">';  
    //     table += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Βαθμός</th><th class="dcell">Εξεταστική περίοδος</th></tr>';
    //     var inputs = document.querySelectorAll('.bath');
    //     for (var i = 0; i < inputs.length; i++) {
    //         if(inputs[i].checked === true){
    //             var grade = inputs[i].value;
    //             var name = inputs[i].name;
    //             var period = inputs[i].id;
    //             table += `<tr><th>${name}</td><th>${grade}</td><th>${period}</td></tr>`; 
    //         }
    //     }
    //     table += '</table>'; 
    //     var gg = document.getElementById("dyn1");  
    //     if (gg){ gg.innerHTML = table;}
    // }
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
            <div>
                <Button onClick={toggleVisibility} />
                <Dropdown isVisible={isVisible} />
            </div>
            <div class="d-div1"> 
                <div id="dyn11"></div>
            </div>
            <div className="dilosi_rectangle1">
                    <div onClick={GetCheckboxValue2} className="dilosi_div">Επόμενο ➜</div>
            </div>
            <h4 class="error1" id="result"></h4>  
            <Footer />
        </div>
    );
}