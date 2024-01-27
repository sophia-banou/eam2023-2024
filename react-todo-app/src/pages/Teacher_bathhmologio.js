import React from "react"
import { useState, useEffect } from 'react';
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/teacher_menu.js"
import "./../css/Teacher_bathmologio.css";
import "./../css/App.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";
import { db } from '../components/firebase.js';
import { doc, getDoc, updateDoc, deleteDoc, setDoc, collection, getDocs } from 'firebase/firestore'


function Button(props) {
  return (
    <button className="bath_rectangle" onClick={props.onClick}>
      <div className="menu_div">Δημιουργία <br></br>Βαθμολογίου<img className="plus" alt="" src="/plus.png" /></div>
    </button>
  );
}
function Dropdown(props) {
  return (
    <div>
      {props.isVisible ? (
        <div className="menu_box">
          {/* <div className="menu_div2">Μαζικά</div> */}
          <Link className="link_deco" to="/teacher_create"><div className="menu_div2">Μεμονομένα</div></Link>
        </div>
      ) : null}
    </div>
  );
}
export default function StudentProfile() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  async function getGrades() {

    const res = await getDoc(doc(db, "users", localStorage.getItem("email")));
    var grades = res.data().grade_id;

    let table = '<table class="d-table2">';
    table += '<tr> <th class="dcell"> Όνομα Μαθήματος</th> <th class="dcell">Ημερομηνία</th><th class="dcell">Κατάσταση</th><th class="dcell">Ενέργειες</th> ';

    for (var i = 0; i < grades.length; i++) {
      var id = grades[i];

      const res2 = await getDoc(doc(db, "grades", id));
      if (res2.data().status == "Προσωρινή") {
        table += `<tr> <td>${res2.data().class_name} </td> <td>${res2.data().date} </td><td>${res2.data().status}</td> 
              <td> <img class="vicon2" src="./view-icon.png" value=${id} />   <img class="eicon2" src ="./edit-icon2.png" value=${id}>  </td></tr>`
      }
      else {
        table += `<tr> <td>${res2.data().class_name} </td> <td>${res2.data().date} </td><td>${res2.data().status}</td> 
              <td>  <img class="vicon2" src="./view-icon.png" value=${id} />  <img class="icont" src ="./edit-icon3.png"> </td></tr>`
      }


    }


    table += '</table>';


    var gib = document.getElementById("dyn21");
    if (gib) { gib.innerHTML = table; }
    jj();

  }

  function handleClick (element){
    console.log(element);
    var value = element.getAttribute("value");
    console.log(element, value);
    sessionStorage.setItem("did",value);
    window.location.assign('/view_grades');
}

function handleClick2 (element){
    var value = element.getAttribute("value");
    console.log(element, value);
    sessionStorage.setItem("did",value);
    window.location.assign('/edit_grades');
}

function jj(){
    var inputs = document.querySelectorAll('.vicon2');
    for (var i = 0; i < inputs.length; i++) {;
        inputs[i].addEventListener('click', (function(e){
            return function() {handleClick(e); };
        }) (inputs[i]),false);

    }

    var inputs2 = document.querySelectorAll('.eicon2');
    for (var i = 0; i < inputs2.length; i++) {
        inputs2[i].addEventListener('click', (function(e){
            return function() {handleClick2(e); };
        }) (inputs2[i]),false);  
    }

}

  useEffect(() => {
    getGrades();
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
      <div className="breadcrumb_body2"><Link to="/teachers">Αρχική / </Link> <span>Βαθμολόγια</span></div>
      <div>
        <Button onClick={toggleVisibility} />
        <Dropdown isVisible={isVisible} />
      </div>
      <div className="tm-div1">
        <div class="btable">
          <div class="table1">
            <h>Βαθμολόγια</h>
          </div>
          <div id="dyn21" class="div-table" ></div>
        </div>
      </div>
      <Footer />

    </div >

  )
}