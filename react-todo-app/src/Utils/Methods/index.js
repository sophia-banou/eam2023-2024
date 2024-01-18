// Logout checks if you have the specific keys stored in your local storage. 
// If you have then deletes them and redirects to login page.
import "./methods.css";

export function logout() {
    if (localStorage.getItem('role') !== null || localStorage.getItem('email') !== null || localStorage.getItem('AM') !== null || localStorage.getItem('name') !== null) {
        localStorage.removeItem('role')
        localStorage.removeItem('name')
        localStorage.removeItem('AM')
        localStorage.removeItem('email')
        localStorage.removeItem('dob')
        localStorage.removeItem('pob')
        localStorage.removeItem('semester')
        localStorage.removeItem('marital_status')
        localStorage.removeItem('father_name')
        localStorage.removeItem('mother_name')
        localStorage.removeItem('id')
        localStorage.removeItem('AMKA')
        localStorage.removeItem('year1')
        localStorage.removeItem('date1')
        localStorage.removeItem('address')
        localStorage.removeItem('city')
        localStorage.removeItem('code')
        localStorage.removeItem('phone1')
        localStorage.removeItem('phone2')
 
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
    pbutton2.className = "cell"
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