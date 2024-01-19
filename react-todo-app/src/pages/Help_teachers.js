import React from "react"
import {Link} from "react-router-dom";
import './../css/App.css';
import './../css/Help_students.css';
import Nav1 from "./../components/Nav1.js"
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"

export default function Help_teachers() {
    if (localStorage.getItem('role') === null) {
        var nav = <Nav1 />;
      } else {
        var nav = <Nav2 />;
    }
  return (
    <div>
        <div>{nav}</div>
        <div className="body2">
            <div className="div2">Κατηγορίες</div>
            <Link to="/help_dhmiourgia">
            <div className="rectangle-parent">
                <img className="himage" alt="" src="/bathmologia.png" />
                <div className="div">Δημιουργία Βαθμολογίου
                    <div className="div1">Δημιουργία καινούργιου βαθμολογίου, μαζικά ή μεμονωμένα</div>
                </div>  
            </div>
            </Link>
            <Link to="/help_bathmologio">
            <div className="rectangle-container">
                <img className="himage" alt="" src="/aithseis.png" />
                <div className="div">Παλαιότερα Βαθμολόγια
                    <div className="div1">Προβολή και επεξεργασία παλαιότερων βαθμολογιών</div>
                </div>
            </div>
            </Link>
            <Link to="/help_mathimata_didaskontwn">
                <div className="group-div">
                <img className="himage" alt="" src="/mathima.png" />
                <div className="div">Πληροφορίες Μαθημάτων
                    <div className="div1"> Πληροφορίες για όλα τα μαθήματα που διδάσκετε</div>
                </div>
            </div>
            </Link>
            <Link to="/help_teachers_profile">
            <div className="rectangle-parent1">
                <img className="himage" alt="" src="/profile.png" />
                <div className="div">Επεξεργασία Προφίλ
                    <div className="div1">Δυνατότητα προβολής και επεξεργασίας του προφίλ</div>
                </div>
            </div>
            </Link>
        </div>
        <Footer />
    </div>
  );
}