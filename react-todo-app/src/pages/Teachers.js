import React from "react"
import './../css/HomePage.css';
import './../css/Teachers.css';
import Nav2 from "./../components/Nav2.js"
import { useState, useEffect } from 'react';
import Footer from "./../components/footer.js"
import Menu from "./../components/teacher_menu.js"
import { Link } from "react-router-dom";

export default function Teachers() {
  useEffect(()=> {
    //getDilosi();
    // Every time you try to enter this page check if you have a saved key at the local storage. 
    // If not, then do not allow user to enter this page and redirect to login page
    if (localStorage.getItem('role') !== "teacher") {
        window.location.href = '/login2'
    }
},[])
  return (
    
    <div>
      <Nav2 />
      {/* <Menu /> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div id="header-image-menu-students" className="main-teach">
        <img src="teachers-banner.jpg" alt="National and Kapodistrian University of Athens" />
        <div className="teachers_body">
            <Link to="/teacher_bathmologia">
            <div className="teacher_div1">
                <img className="timage" alt="" src="/bathmologia.png" />
                <div className="teachers_div">Τα Βαθμολόγια Μου
                    <div className="teachers_div1">Δείτε βαθμολόγια που έχετε <br></br>δημιουργήσει στο παρελθόν</div>
                </div>
            </div>
            </Link>
            <Link to="/teacher_mathimata">
            <div className="teacher_div2">
                <img className="timage" alt="" src="/mathima.png" />
                <div className="teachers_div">Πληροφορίες Μαθημάτων
                    <div className="teachers_div1">Δείτε πληροφορίες για τα <br></br>μαθήματα που διδάσκετε</div>
                </div>
            </div>
            </Link>
            <Link to="/teacher_create">
            <div className="teacher_div3">
                <img className="timage" alt="" src="/memwnomena.png" />
                <div className="teachers_div">Δημιουργία Νέου Βαθμολογίου Μεμονωμένα
                    <div className="teachers_div1">Δημιουργήστε νέο βαθμολόγιο με <br></br>μεμονωμένη εισαγωγή βαθμών</div>
                </div>
            </div>
            </Link>
            {/* <div className="teacher_div4">
                <img className="timage" alt="" src="/mazika.png" />
                <div className="teachers_div">Δημιουργία Νέου Βαθμολογίου Μαζικά
                    <div className="teachers_div1">Δημιουργήστε νέο βαθμολόγιο με <br></br>ανέβασμα αρχείου</div>
                </div>
            </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}