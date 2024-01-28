import React from "react"
import { useEffect, useState } from 'react';
import { Button3 } from "../components/Button1.js";
import { db } from '../components/firebase.js';
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/teacher_menu.js"
import "./../css/Teacher_bathmologio.css";
import "./../css/App.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";

//var mathima = "Εισαγωγή στον Προγραμματισμό";
var array = new Array();

export default function Teacher_create() {
  const [button, setButton] = useState();

  function Button2(props) {
    return (
      <div className="bath_rectangle" onClick={props.onClick}>
        <div className="bathmologio-pr-div-b">Επιλέξτε μάθημα ▽ </div>
      </div>
    );
  }
  function Dropdown2(props) {
    getCourses();
    return (
      <div >
        {props.isVisible ? (
          <div id="dyn23" />
        ) : null}
      </div>
    );
  }

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  async function getCourses() {
    var user_email = localStorage.getItem("email");
    const ref = doc(db, "users", user_email);
    const res = await getDoc(ref);
    var courses = res.data().courses;
    let dropdown = '<div class="menu_box">';
    for (var id = 0; id < courses.length; id++) {
      dropdown += `<div class="menu_div2" title="${courses[id].name}">${courses[id].name}</div>`;
    }
    dropdown += `</div>`;
    var gib = document.getElementById("dyn23");
    if (gib) { gib.innerHTML = dropdown; }
    jj();
  }
  async function getDilosi(element) {
    var mathima = element.getAttribute("title");
    sessionStorage.setItem("bath_mathima", mathima);
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
    var b = <Button3 />
    setButton(b);
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

  function jj2() {
    var inputs = document.querySelectorAll('.input2');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('submit', getValues);
    }
  }

  function getValues(event) {
    event.preventDefault();
    if (this.value >= 10) {
      console.log("error");
    }
  }



  useEffect(() => {
    // Every time you try to enter this page check if you have a saved key at the local storage. 
    // If not, then do not allow user to enter this page and redirect to login page
    if (localStorage.getItem('role') !== "teacher") {
      window.location.href = '/login2'
    }
  }, [])
  return (
    <div>
      <Nav2 />
      <Menu />
      <div className="breadcrumb_body5"><Link to="/teachers">Αρχική / </Link> <Link to="/teacher_bathmologia">Βαθμολόγια / </Link><span>Δημιουργία Βαθμολογίου Μεμονωμένα</span></div>
      <div className="tm-div1">
        <div class="title">Δημιουργία Βαθμολογίου</div>
        <Button2 onClick={toggleVisibility} />
        <Dropdown2 isVisible={isVisible} />
        <div id="dyn22"></div>
        <div>{button}</div>
        {/* <div onClick={GetBoxValue} className="dilosi_rectangle1">Προσωρινή Αποθήκευση</div> */}
        <h4 class="error1" id="result"></h4>
      </div>
      <Footer />

    </div >

  )
}