import React from "react"
import {useEffect,  useState } from 'react';
import { db } from '../components/firebase.js';
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/teacher_menu.js"
import "./../css/Teacher_bathmologio.css";
import "./../css/App.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";

var mathima = "Εισαγωγή στον Προγραμματισμό";
var array = new Array();
function Button2(props) {
    return (
      <button className="bath_rectangle" onClick={props.onClick}>
        <div className="menu_div">Όνομα μαθήματος ▽ </div>
      </button>
    );
}
  function Dropdown2(props) {
    return (
      <div>
        {props.isVisible ? (
        <div className="menu_box">
            <div className="menu_div2">Μάθημα 1</div>
            <div className="menu_div2">Μάθημα 2</div>
        </div>
        ) : null}
      </div>
    );
}
export default function Teacher_create() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    
    async function getDilosi (){
      const diloseis = await getDocs(collection(db, "diloseis"));
      diloseis.forEach(doc => {
          var courses = JSON.parse(doc.data().courses);
          var exists = 0;
          for (var id = 0; id < courses.length; id++){
            var course = courses[id]; 
            if (course[0] === mathima){
              exists = 1;
              break;
            }
          }
          if (exists === 1){
            array.push(doc.data().user);
          }
      })
      console.log(array);
      getStudent()
    }
    async function getStudent(){
      let table = '<table class="d-table2">';  
      table += '<tr><th class="dcell">Όνομα Φοιτητή</th><th class="dcell">Α.Μ.</th><th class="dcell">Εξάμηνο φοίτησης</th></tr>';
      for(var i = 0; i < array.length; i++){
        var user = array.pop();
        const ref = doc(db, "users", user); 
        const res = await getDoc(ref);
        var name = res.data().name;
        var am = res.data().am;
        var semester = res.data().semester;
        table += `<tr><th>${name}</th><th>${am}</th><th>${semester}</th></tr>`;
        console.log(name, am, semester);
      }
      table += `</table>`;
      var gib = document.getElementById("dyn22");  
      if (gib){ gib.innerHTML = table;}
    }
    useEffect(()=> {
      getDilosi();
      // Every time you try to enter this page check if you have a saved key at the local storage. 
      // If not, then do not allow user to enter this page and redirect to login page
      if (localStorage.getItem('role') !== "teacher") {
          window.location.href = '/'
      }
  },[])
    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to ="/teachers">Αρχική / </Link> <Link to ="/teacher_bathmologia">Βαθμολόγια / </Link><span>Δημιουργία Βαθμολογίου</span></div>
            <div>
                <Button2 onClick={toggleVisibility} />
                <Dropdown2 isVisible={isVisible} />
                <div id="dyn22"></div>
            </div>
            <Footer />

        </div >

    )
}