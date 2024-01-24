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
    var inputs = document.querySelectorAll('.bath');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = true;
    }
}
var res = [];

export function GetCheckboxValue() {
    res = new Array();
    var count = 0;
    var inputs = document.querySelectorAll('.cb');
        for (var i = 0; i < inputs.length; i++) {
            if(inputs[i].checked === true){
                res[count] = new Array(inputs[i].name, inputs[i].value, inputs[i].id, inputs[i].title)
                count++;
            }
        }
        if (count == 0){
            return document.getElementById("result").innerHTML = "Δεν έχετε επιλέξει κάποιο μάθημα";
        }
        else {
            sessionStorage.setItem("res", JSON.stringify(res));
            window.location.href = './proswrinh1' ;
        }
}  

export function generateTable() {  
    var data = JSON.parse(sessionStorage.getItem("res"));

    let table = '<table class="d-table2">';  
    table += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Εξάμηνο</th> <th class="dcell">Κατηγορία</th></tr>';  
   
    for (var i=0; i<data.length; i++){
        var course = data[i];
        table += `<tr><th>${course[0]}</th><th>${course[1]}</th><th>${course[2]}</th><th>${course[3]}</th></tr>`;
    }
    
    table += '</table>';   
    var gib = document.getElementById("dyn10");  
    if (gib){ gib.innerHTML = table;}
   
}  
export function GetCheckboxValue2() {
    res = new Array();
    var count = 0;
    var inputs = document.querySelectorAll('.bath');
        for (var i = 0; i < inputs.length; i++) {
            if(inputs[i].checked === true){
                res[count] = new Array(inputs[i].value, inputs[i].name, inputs[i].id)
                count++;
            }
        }
        if (count == 0){
            return document.getElementById("result").innerHTML = "Δεν έχετε επιλέξει κάποια βαθμολογία";
        }
        else {
            sessionStorage.setItem("res2", JSON.stringify(res));
            window.location.href = '/proepiskopisi' ;
        }
}
export function generateTable2() {  
    var data = JSON.parse(sessionStorage.getItem("res2"));

    let table = '<table class="d-table2">';  
    table += '<tr><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Βαθμός</th><th class="dcell">Εξεταστική περίοδος</th></tr>';  
   
    for (var i=0; i<data.length; i++){
        var course = data[i];
        table += `<tr><th>${course[1]}</td><th>${course[0]}</td><th>${course[2]}</td></tr>`;
    }
    
    table += '</table>';   
    var gib = document.getElementById("dyn12");  
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
        return (<Link to="/">Αρχική σελίδα / </Link>);
      } else {
        if (localStorage.getItem('role') === "student")
            return(<Link to="/students">Αρχική σελίδα / </Link>);
        if (localStorage.getItem('role') === "teacher")
            return(<Link to="/teachers">Αρχική σελίδα / </Link>);
    }  
}

export function getGrade() {  
    var data = sessionStorage.getItem("res").split(',');

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