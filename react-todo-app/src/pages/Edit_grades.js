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
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "teacher") {
            window.location.href = '/'
        }
    }, [])

    var array = new Array;


    async function getDilosi() {
        console.log(mathima);
        const diloseis = await getDocs(collection(db, "diloseis"));
        diloseis.forEach(doc => {
          var courses = JSON.parse(doc.data().courses);
          if (doc.data().status == "Οριστική") {
            //console.log("or");
            //console.log(array);
            var exists = 0;
            for (var id = 0; id < courses.length; id++) {
              var course = courses[id];
              if (course[0] === mathima) {
                exists = 1;
                break;
              }
            }
            if (exists === 1) {
              array.push(doc.data().user);
            }
          }
          
        })
        
        getStudent()
      }
      async function getStudent() {
        let table = '<table class="d-table2">';
        table += '<tr><th class="dcell">Όνομα Φοιτητή</th><th class="dcell">Α.Μ.</th><th class="dcell">Εξάμηνο φοίτησης</th><th class="dcell">Βαθμός</th></tr>';
        for (var i = 0; i < array.length; i++) {
          var user = array.pop();
          const ref = doc(db, "users", user);
          const res = await getDoc(ref);
          var name = res.data().name;
          var am = res.data().am;
          var semester = res.data().semester;
          table += `<tr><th>${name}</th><th>${am}</th><th>${semester}</th><th><input class="input2" id="${am}" name="${name}" title="${semester}"/></th></tr>`;
          //console.log(name, am, semester);
        }
        table += `</table>`;
        var gib = document.getElementById("dyn22");
        if (gib) { gib.innerHTML = table; }
      }
      function jj() {
        var inputs = document.querySelectorAll('.menu_div2');
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].addEventListener('click', (function (e) {
            return function () { getDilosi(e) };
          })(inputs[i]), false);
    
        }
      }
    

    return (

        <div>

            <Nav2 />
            <Menu />


            <div>
                <Link to="/teacher_bathmologia">
                    <img src="back-arrow.png" class="arrow-icon2"></img>
                </Link>
                <div class="d-div1">
                    <div id="grades-table"></div>
                </div>
                <div className="dilosi_rectangle1">
                    <div className="dilosi_div">Προσωρινή Αποθήκευση</div>
                </div>
                <h4 class="error1" id="result"></h4>
            </div>
            <Footer />
        </div>

    );

}