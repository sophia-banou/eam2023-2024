import React from "react"
import { Link } from "react-router-dom";
import './../css/App.css';
import './../css/Help_dilosi.css';
import Nav1 from "./../components/Nav1.js"
import Nav2 from "../components/Nav2.js"
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
        <div className="breadcrumb_body5">{Arxiki()} <Link to="/help">Βοήθεια / </Link> <Link to="/help_students">Φοιτητές / </Link> <span>Προβολή Βαθμολογιών</span></div>
        <div className="body_hdilosis">
            <div className="little_box">
            <img className="himage3" alt="" src="/bathmologia.png" />
            <div className="help_dilosi_div2">Προβολή Βαθμολογιών</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p id ="paragraph">
            Για να ενημερωθείτε σχετικά με τις βαθμολογίες σας:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε το κουμπί <span class="bold"> "Βαθμολογίες" </span> από την αρχική οθόνη.</li>
            <li>Πλοηγηθείτε στους πίνακες των βαθμολογιών σας ανά εξάμηνο. Μπορείτε να χρησιμοποιήσετε τα φίλτρα για να εμφανίσετε μόνο τις επιτυχημένες ή αποτυχημένες προσπάθειες σας. Αφού επιλέξετε αυτές τις οποίες θέλετε να εκτυπώσετε πατήστε <span class="bold">ΠΡΟΕΠΙΣΚΟΠΗΣΗ ΕΚΤΥΠΩΣΗΣ</span></li>
            <li>Επιβεβαιώστε ότι έχουν επιλεγεί οι βαθμολογίες που θέλετε και πατήστε <span class="bold">Εκτύπωση</span>.</li>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}