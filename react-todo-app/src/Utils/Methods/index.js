// Logout checks if you have the specific keys stored in your local storage. 
// If you have then deletes them and redirects to login page.
import "./methods.css";
import {db} from '../../components/firebase';
import {doc, getDoc,setDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";

export function logout() {
    if (localStorage.getItem('role') !== null || localStorage.getItem('email') !== null || localStorage.getItem('AM') !== null || localStorage.getItem('name') !== null) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '/'
    }
}


export function btnTab1() {

    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var table3 = document.getElementById("table3");
    var pbutton1 = document.getElementById("pb1");
    var pbutton2 = document.getElementById("pb2");
    var pbutton3 = document.getElementById("pb3");

    table1.style.display = "table";
    table2.style.display = "none";
    table3.style.display = "none";
    pbutton1.className = "active"
    pbutton2.className = "cell"
    pbutton3.className = "cell"
}
export function btnTab2() {

    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var table3 = document.getElementById("table3");
    var pbutton1 = document.getElementById("pb1");
    var pbutton2 = document.getElementById("pb2");
    var pbutton3 = document.getElementById("pb3");

    table1.style.display = "none";
    table2.style.display = "table";
    table3.style.display = "none";
    pbutton1.className = "cell"
    pbutton2.className = "active"
    pbutton3.className = "cell"
}

export function btnTab3() {

    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var table3 = document.getElementById("table3");
    var pbutton1 = document.getElementById("pb1");
    var pbutton2 = document.getElementById("pb2");
    var pbutton3 = document.getElementById("pb3");

    table1.style.display = "none";
    table2.style.display = "none";
    table3.style.display = "table";
    pbutton1.className = "cell"
    pbutton2.className = "cell"
    pbutton3.className = "active"
}

const courses = [
    {name: "Επικοινωνία Ανθρώπου Μηχανής", major: "A", semester: "7o", category: "Κατ'Επιλογήν Υποχρεωτικό", id:"eam"},
    {name: "Σήματα & Συστήματα", major: "Κοινό", semester: "3ο", category: "Υποχρεωτικό", id:"ss"},
    {name: "Τεχνητή Νοημοσύνη Ι", major: "Α", semester: "5ο", category: "Προαιρετικό", id:"tn" },
    {name: "Γραφικά Ι", major: "Α", semester: "5ο", category: "Προαιρετικό", id:"g1" },
]
const grades = [
    {name: "Επικοινωνία Ανθρώπου Μηχανής", grade: "10", period: "Ιανουαρίου", id:"eam"},
    {name: "Σήματα & Συστήματα", grade: "6", period: "Σεπτεμβρίου", id:"ss"},
    {name: "Τεχνητή Νοημοσύνη Ι", grade: "3", period: "Ιανουαρίου", id:"tn" },
    {name: " Ανάλυση Ι", grade: "7", period: "Ιουνίου", id:"g1" },
]

export function checkAll() {
    var inputs = document.querySelectorAll('.cb');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = true;
    }
}
var res = [];

export function GetCheckboxValue() {
    var l1 = document.getElementById("check1");
    var l2 = document.getElementById("check2");
    var l3 = document.getElementById("check3");
    var l4 = document.getElementById("check4");
    var pl1 = l1.value;
    var pl2 = l2.value;
    var pl3 = l3.value;
    var pl4 = l4.value;



    res = new Array();

    if (l1.checked == true) {
        res.push(pl1);
    }
    if (l2.checked == true) {
        res.push(pl2);
    }
    if (l3.checked == true) {
        res.push(pl3);
    }
    if (l4.checked == true) {
        res.push(pl4);
    }
    if (l1.checked != true && l2.checked != true && l3.checked != true && l4.checked != true) {
        return document.getElementById("result").innerHTML = "Δεν έχετε επιλέξει κάποιο μάθημα";
    } else {
        sessionStorage.setItem("res",res);
        window.location.href = './proswrinh1' ;
    }

}  

export function generateTable() {  
    var data = sessionStorage.getItem("res").split(',');

    let table = '<table class="d-table2">';  
    table += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Εξάμηνο</th> <th class="dcell">Κατηγορία</th></tr>';  
   
    for (var i=0; i<data.length; i++){
        var id1 = data[i];
        let course = courses.find(course => course.id === id1);
        table += `<tr><th>${course.name}</td><th>${course.major}</td><td>${course.semester}</td><td>${course.category}</td> </tr>`; 
    }
    
    table += '</table>';   
    var gib = document.getElementById("dyn1");  
    if (gib){ gib.innerHTML = table;}
   
}  

export function logo() {
    if (localStorage.getItem('role') === "student") {
        window.location.href = '/students'
    }
    if (localStorage.getItem('role') === "teacher"){
        window.location.href = "/teachers"
    }
}
export function profil() {
    if (localStorage.getItem('role') === "student") {
        window.location.href = '/student_profile'
    }
    if (localStorage.getItem('role') === "teacher"){
        window.location.href = "/teacher_profile"
    }
}
export function Arxiki(){
    if (localStorage.getItem('role') === null) {
        return (<div><Link to="/">Αρχική σελίδα ></Link> <span>Βοήθεια</span></div>);
      } else {
        if (localStorage.getItem('role') === "student")
            return(<Link to="/students">Αρχική σελίδα ></Link>);
        if (localStorage.getItem('role') === "teacher")
            return(<Link to="/teachers">Αρχική σελίδα ></Link>);
    }  
}
export function generateTable2() {  
    var date = sessionStorage.getItem("date1");
    var status = sessionStorage.getItem("status1");

    let table = '<table class="d-table2">';  
    table += '<tr><th class="dcell">Ημερομηνία</th><th class="dcell">Κατάσταση</th><th class="dcell">Ενέργειες</th> ';  
   
    table += `<tr><td>${date} </td><td>${status}</td> <td> <img class="icont" src="./view-icon.png" /> <img class="icont" src ="./edit-icon2.png"></td></tr>`

    table += '</table>';   
    var gib = document.getElementById("dyn1");  
    if (gib){ gib.innerHTML = table;}
   
}  

var res2 = [];

export function GetCheckboxValue2() {
    var l1 = document.getElementById("check1");
    var l2 = document.getElementById("check2");
    var l3 = document.getElementById("check3");
    var l4 = document.getElementById("check4");
    var pl1 = l1.value;
    var pl2 = l2.value;
    var pl3 = l3.value;
    var pl4 = l4.value;



    res2 = new Array();

    if (l1.checked == true) {
        res2.push(pl1);
    }
    if (l2.checked == true) {
        res2.push(pl2);
    }
    if (l3.checked == true) {
        res2.push(pl3);
    }
    if (l4.checked == true) {
        res2.push(pl4);
    }
    if (l1.checked != true && l2.checked != true && l3.checked != true && l4.checked != true) {
        return document.getElementById("result").innerHTML = "Δεν έχετε επιλέξει κάποιο μάθημα";
    } else {
        sessionStorage.setItem("res2",res2);
        window.location.href = './proeskopisi' ;
    }

}
export function getGrade() {  
    var data = sessionStorage.getItem("res2").split(',');

    let table = '<table class="d-table2">';  
    table += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Βαθμός</th><th class="dcell">Εξεταστική περίοδος</th></tr>';  
   
    for (var i=0; i<data.length; i++){
        var id1 = data[i];
        let grade = grades.find(grade => grade.id === id1);
        table += `<tr><th>${grade.name}</td><th>${grade.grade}</td><td>${grade.period}</td></tr>`; 
    }
    
    table += '</table>';   
    var gib = document.getElementById("dyn1");  
    if (gib){ gib.innerHTML = table;}
   
} 