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
        <div className="breadcrumb_body5">{Arxiki()} <Link to="/help">Βοήθεια / </Link><Link to="/help_teachers">Διδάσκοντες / </Link><span>Δημιουργία Βαθμολογίου</span></div>
        <div className="body_hdilosis">
            <div className="little_box">
            <img className="himage3" alt="" src="/bathmologia.png" />
            <div className="help_dilosi_div2">Δημιουργία Βαθμολογίου</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p id="paragraph">
            Για να δημιουργήσετε καινούργιο βαθμολόγιο:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε το κουμπί <span class="bold"> "Δημιουργία Νέου Βαθμολογίου Μεμονωμένα" </span> από την αρχική οθόνη.</li>
            <li>Πατήστε το κουμπί <span class="bold">Επιλέξτε μάθημα</span> και επιλέξτε το μάθημα για το οποίο ενδιαφέρεστε. Πλοηγηθείτε στον κατάλογο των φοιτητών και εισάγετε τον βαθμό του κάθε φοιτητή στο πλαίσιο που βρίσκεται στην σειρά <span class="bold">Βαθμός</span>.</li>
            <li>Πατήστε το κουμπί <span class="bold">Προσωρινή Αποθήκευση</span>.</li>
            <li>Αν επιθυμείτε να αλλάξετε κάτι, σας δίνεται η δυνατότητα να γυρίσετε πίσω για να εισάγετε βαθμούς σε φοιτητές από την αρχή.</li>
            <li>Εφόσον είστε σίγουροι ότι οι βαθμοί που εισήγατε είναι σωστοί, πατήστε το κουμπί <span class="bold">Οριστική Υποβολή</span>.</li>
            <br></br>
            <div className="italic">Σημείωση : Όταν πατήσετε Οριστική Υποβολή δεν θα έχετε την δυνατότητα να τροποποιήσετε περαιτέρω το βαθμολόγιο σας.<br></br>Τα βαθμολόγια που είναι σε κατάσταση προσωρινής αποθήκευσης ή οριστικής υποβολής βρίσκονται στην λίστα των βαθμολογίων.</div>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}