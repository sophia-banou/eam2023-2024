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
        <div className="breadcrumb_body5">{Arxiki()} <Link to="/help">Βοήθεια / </Link><span>Διδάσκοντες</span></div>
        <Link to="/help">
                <img src="back-arrow.png" class="arrow-icon4"></img>
        </Link>
        <div class="title">Κατηγορίες</div>
        <div className="body2">
            
            <Link class="link" to="/help_dhmiourgia">
            <div className="rectangle-parent">
                <div><img className="himage" alt="" src="/bathmologia.png" /> </div>
                <div><p><h>Δημιουργία Βαθμολογίου </h> <br></br>
                    Δημιουργία καινούργιου βαθμολογίου μεμονωμένα
                    </p></div>
            </div>
            </Link>
            <Link class="link" to="/help_bathmologio">
            <div className="rectangle-container">
                <div><img className="himage" alt="" src="/aithseis.png" /> </div>
                <div><p><h>Παλαιότερα Βαθμολόγια </h> <br></br>
                    Προβολή και επεξεργασία παλαιότερων βαθμολογιών</p></div>
               
            </div>
            </Link>
            <Link class="link" to="/help_mathimata_didaskontwn">
                <div className="group-div">
                <div><img className="himage" alt="" src="/mathima.png" /> </div>
                <div><p><h>Πληροφορίες Μαθημάτων </h> <br></br>
                    Πληροφορίες για όλα τα μαθήματα που διδάσκετε</p></div>
            </div>
            </Link>
            <Link class="link" to="/help_teachers_profile">
            <div className="rectangle-parent1">
                <div><img className="himage" alt="" src="/profile.png" /> </div>
                <div><p><h>Επεξεργασία Προφίλ </h> <br></br>
                    Δυνατότητα προβολής και επεξεργασίας του προφίλ</p></div>
            </div>
           
            </Link>
        </div>
        <Footer />
    </div>
  );
}