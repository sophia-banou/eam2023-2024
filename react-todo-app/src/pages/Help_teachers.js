import React from "react"
import { Link } from "react-router-dom";
import './../css/App.css';
import './../css/Help_students.css';
import Nav1 from "./../components/Nav1.js"
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import {Arxiki} from "../Utils/Methods/index.js"

export default function Help_teachers() {
    if (localStorage.getItem('role') === null) {
        var nav = <Nav1 />;
      } else {
        var nav = <Nav2 />;
    }
  return (
    <div>
        <div>{nav}</div>
        <div className="breadcrumb_body">{Arxiki()} <Link to="/help">Βοήθεια / </Link><span>Διδάσκοντες</span></div>
        <div className="body2">
            <div className="hdiv2">Κατηγορίες</div>
            <Link to="/help_dhmiourgia">
            <div className="rectangle-parent">
                <img className="himage" alt="" src="/bathmologia.png" />
                <div className="hdiv">Δημιουργία Βαθμολογίου
                    <div className="hdiv1">Δημιουργία καινούργιου βαθμολογίου, μαζικά ή μεμονωμένα</div>
                </div>  
            </div>
            </Link>
            <Link to="/help_bathmologio">
            <div className="rectangle-container">
                <img className="himage" alt="" src="/aithseis.png" />
                <div className="hdiv">Παλαιότερα Βαθμολόγια
                    <div className="hdiv1">Προβολή και επεξεργασία παλαιότερων βαθμολογιών</div>
                </div>
            </div>
            </Link>
            <Link to="/help_mathimata_didaskontwn">
                <div className="group-div">
                <img className="himage" alt="" src="/mathima.png" />
                <div className="hdiv">Πληροφορίες Μαθημάτων
                    <div className="hdiv1"> Πληροφορίες για όλα τα μαθήματα που διδάσκετε</div>
                </div>
            </div>
            </Link>
            <Link to="/help_teachers_profile">
            <div className="rectangle-parent1">
                <img className="himage" alt="" src="/profile.png" />
                <div className="hdiv">Επεξεργασία Προφίλ
                    <div className="hdiv1">Δυνατότητα προβολής και επεξεργασίας του προφίλ</div>
                </div>
            </div>
            </Link>
        </div>
        <Footer />
    </div>
  );
}