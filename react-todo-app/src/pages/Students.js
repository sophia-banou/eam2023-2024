import React from "react"
import './../css/HomePage.css';
import './../css/Teachers.css';
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import { useEffect } from 'react';
import Menu from "./../components/student_menu.js"
import { Link } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
    // Every time you try to enter this page check if you have a saved key at the local storage. 
    // If not, then do not allow user to enter this page and redirect to login page
    if (localStorage.getItem('role') !== "student") {
        window.location.href = '/login2'
    }
}, [])
  return (
    <div>
      <Nav2 />
      {/* <Menu /> */}
      <div id="header-image-menu-students">
        <img src="stu-banner.png" alt="National and Kapodistrian University of Athens" />
        <div className="teachers_body">
          
            <Link to="/student_mathimata">
              <div className="teacher_div1">
                <img className="timage" alt="" src="/mathima.png" />
                <div className="teachers_div">Τα Μαθήματα Μου
                    <div className="teachers_div1">Δείτε τα μαθήματα του <br></br>Προγράμματος Σπουδών σας</div>
                </div>
              </div>
            </Link>
            <Link to="/student_bathmologies">
              <div className="teacher_div2">
                  <img className="timage" alt="" src="/bathmologia.png" />
                  <div className="teachers_div">Οι Βαθμολογίες Μου
                    <div className="teachers_div1">Δείτε και εκτυπώστε τις <br></br>βαθμολογίες σας</div>
                  </div>
              </div>
            </Link>
            <Link to="/student_dilosi">
              <div className="teacher_div3">
                <img className="timage" alt="" src="/dhlwsh.png" />
                <div className="teachers_div">Δήλωση Μαθημάτων
                    <div className="teachers_div1">Δηλώστε μαθήματα για την <br></br>τρέχουσα εξεταστική περίοδο</div>
                </div>
              </div>
            </Link>
            <Link to="/istoriko">
              <div className="teacher_div4">
                <img className="timage" alt="" src="/aithseis.png" />
                <div className="teachers_div">Ιστορικό
                    <div className="teachers_div1">Δείτε παλαιότερες δηλώσεις <br></br>και ελέγξτε την κατάσταση <br></br>των αιτήσεων σας</div>
                </div>
              </div>
            </Link>
            <Link to="/student_aitisi">
              <div className="teacher_div5">
                <img className="timage" alt="" src="/pistopoihtiko.png" />
                <div className="teachers_div">Αίτηση Πιστοποιητικού
                    <div className="teachers_div1">Αιτηθείτε για να λάβετε το<br></br>πιστοποιητικό που χρειάζεστε</div>
                </div>
              </div>
            </Link>
            <Link to="/edit_profile">
              <div className="teacher_div6">
                <img className="timage" alt="" src="/profile.png" />
                <div className="teachers_div">Επεξεργασία Προφίλ
                    <div className="teachers_div1">Ενημερώστε το προφίλ σας με τα<br></br>πρόσφατα προσωπικά σας στοιχεία</div>
                </div>
              </div>
            </Link>
          </div>
        
      </div>
      <Footer />
    </div>
  );
}