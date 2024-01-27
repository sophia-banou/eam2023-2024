import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/teacher_menu.js"
import { useState, useEffect } from 'react';
import { GetBoxValue } from '../Utils/Methods/index.js';
import { db } from '../components/firebase.js';
import "./../css/istoriko.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";
import { doc, getDocs,  getDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'
import { GetCheckboxValue } from '../Utils/Methods/index.js';

export default function Edit_grades() {
  const [bname, setBname] = useState();
  const [bstatus, setBstatus] = useState();
  const [bdate, setBdate] = useState();

    useEffect(() => {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "teacher") {
            window.location.href = '/login2'
        }
    }, [])

  async function getGrade() {
      var id = sessionStorage.getItem("did");
      const res2 = await getDoc(doc(db, "grades", id));
      var grades = JSON.parse(res2.data().grades);
      sessionStorage.setItem("bath_mathima", res2.data().class_name);
      setBname(res2.data().class_name);
      setBstatus(res2.data().status);
      setBdate(res2.data().date);

      let table = '<table class="d-table2">';
      table += '<tr><th class="dcell">Όνομα Φοιτητή</th><th class="dcell">Α.Μ.</th><th class="dcell">Εξάμηνο φοίτησης</th><th class="dcell">Βαθμός</th></tr>';
      for (var i = 0; i < grades.length; i++) {
          var grade = grades[i];
          var name = grade[0];
          var am = grade[1];
          var semester = grade[2];
          var gradegrade = grade[3];
          table += `<tr><th>${name}</th><th>${am}</th><th>${semester}</th><th><input class="input2" type="text" id="${am}" name="${name}" title="${semester}" value="${gradegrade}"/></th></tr>`;
          //console.log(name, am, semester);
      }
      table += `</table>`;
      var gib = document.getElementById("grades-table2");
      if (gib) { gib.innerHTML = table; }
    }
    
  

  return (
      <div>
          <Nav2 />
          <Menu />
          <div className="breadcrumb_body2"><Link to="/teachers">Αρχική / </Link><Link to="/teacher_bathmologia">Βαθμολόγια / </Link><span>Προβολή Βαθμολογίου</span></div>
          <div>
              <Link to="/teacher_bathmologia">
                  <img src="back-arrow.png" class="arrow-icon2"></img>
              </Link>
              <div class="d-div1">
                  <div class="div2">
                      <p> Όνομα Μαθήματος: <span> {bname}</span> <br></br>
                          Κατάσταση: <span> {bstatus}</span><br></br>
                          Ημερομηνία: <span> {bdate}</span> </p>
                  </div>
                  <div id="grades-table2"></div>
                  <div onClick={GetBoxValue} className="dilosi_rectangle1">Προσωρινή Αποθήκευση</div>
              </div>
          </div>
          <Footer />
      </div>
  );
}