import React from "react"
import './../css/HomePage.css';
import './../css/Teachers.css';
import Nav1 from "./../components/Nav1.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/teacher_menu.js"

export default function Teachers() {
  return (
    <div>
      <Nav1 />
      <Menu />
      <div id="header-image-menu">
        <img src="student_banner.png" alt="National and Kapodistrian University of Athens" />
      </div>
      <div className="teachers_body">
            <div className="teacher_box">
            <div className="teacher_div1">
                <img className="timage" alt="" src="/bathmologia.png" />
                <div className="teachers_div">Τα Βαθμολόγια Μου
                    <div className="teachers_div1">Δείτε βαθμολόγια που έχετε <br></br>δημιουργήσει στο παρελθόν</div>
                </div>
            </div>
            <div className="teacher_div2">
                <img className="timage" alt="" src="/mathima.png" />
                <div className="teachers_div">Πληροφορίες Μαθημάτων
                    <div className="teachers_div1">Δείτε πληροφορίες για τα <br></br>μαθήματα που διδάσκετε</div>
                </div>
            </div>
            <div className="teacher_div3">
                <img className="timage" alt="" src="/bathmologia.png" />
                <div className="teachers_div">Δημιουργία Νέου Βαθμολογίου Μεμονωμένα
                    <div className="teachers_div1">Δημιουργήστε νέο βαθμολόγιο με <br></br>μεμονωμένη εισαγωγή βαθμών</div>
                </div>
            </div>
            <div className="teacher_div4">
                <img className="timage" alt="" src="/bathmologia.png" />
                <div className="teachers_div">Δημιουργία Νέου Βαθμολογίου Μαζικά
                    <div className="teachers_div1">Δημιουργήστε νέο βαθμολόγιο με <br></br>ανέβασμα αρχείου</div>
                </div>
            </div>
            </div>
        </div>
      <Footer />
    </div>
  );
}