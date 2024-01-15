import React from "react"
import './../css/HomePage.css';
import './../css/Teachers.css';
import Nav1 from "./../components/Nav1.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function HomePage() {
  return (
    <div>
      <Nav1 />
      <Menu />
      <div id="header-image-menu-students">
        <img src="student_banner.jpg" alt="National and Kapodistrian University of Athens" />
      </div>
      <div className="teachers_body">
            <div className="teacher_box">
            <div className="teacher_div1">
                <img className="timage" alt="" src="/mathima.png" />
                <div className="teachers_div">Τα Μαθήματα Μου
                    <div className="teachers_div1">Δείτε τα μαθήματα του <br></br>Προγράμματος Σπουδών σας</div>
                </div>
            </div>
            <div className="teacher_div2">
                <img className="timage" alt="" src="/bathmologia.png" />
                <div className="teachers_div">Οι Βαθμολογίες Μου
                    <div className="teachers_div1">Δείτε και εκτυπώστε τις <br></br>βαθμολογίες σας</div>
                </div>
            </div>
            <div className="teacher_div3">
                <img className="timage" alt="" src="/bathmologia.png" />
                <div className="teachers_div">Δήλωση Μαθημάτων
                    <div className="teachers_div1">Δηλώστε μαθήματα για την <br></br>τρέχουσα εξεταστική περίοδο</div>
                </div>
            </div>
            <div className="teacher_div4">
                <img className="timage" alt="" src="/aithseis.png" />
                <div className="teachers_div">Ιστορικό
                    <div className="teachers_div1">Δείτε παλαιότερες δηλώσεις <br></br>και ελέγξτε την κατάσταση <br></br>των αιτήσεων σας</div>
                </div>
            </div>
            </div>
        </div>
      <Footer />
    </div>
  );
}