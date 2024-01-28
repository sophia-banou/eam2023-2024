import React from "react"
import { Link } from "react-router-dom";
import './../css/App.css';
import './../css/Help_dilosi.css';
import Nav1 from "./../components/Nav1.js"
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import {Arxiki} from "../Utils/Methods/index.js"

export default function Help() {
  if (localStorage.getItem('role') === null) {
    var nav = <Nav1 />;
  } else {
    var nav = <Nav2 />;
  }
  return (
    <div>
        <div>{nav}</div>
        <div className="breadcrumb_body5">{Arxiki()} <Link to="/help">Βοήθεια / </Link> <Link to="/help_students">Φοιτητές / </Link><span>Έκδοση Πιστοποιητικού</span></div>
        <Link to="/help_students">
                <img src="back-arrow.png" class="arrow-icon3"></img>
        </Link>
        <div className="body_hdilosis">
            <div className="little_box">
            <img className="himage3" alt="" src="/pistopoihtiko.png" />
            <div className="help_dilosi_div2">Έκδοση Πιστοποιητικού</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p id = "paragraph">
            Για να λάβετε ένα πιστοποιητικό απο την γραμματεία:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε το κουμπί <span class="bold"> "Αίτηση Πιστοποιητικού" </span> από την αρχική οθόνη.</li>
            <li>Επιλέξτε μία από τις διαθέσιμες κατηγορίες πιστοποιητικών που έχει καθορίσει η γραμματεία και πατήστε το κουμπί "Επιλογή".</li>
            <li>Έλεγξτε για την ορθότητα των στοιχείων της αίτησης και πατήστε <span class="bold">Υποβολή</span>.</li>
            <li>Μπορείτε να δείτε το πιστοποιητικό σας ή να το εκτυπώσετε από το <span class="bold">Ιστορικό </span>που βρίσκεται στο <span class="bold">Προφίλ</span>.</li>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}