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
        <div className="breadcrumb_body">{Arxiki()} <Link to="/help">Βοήθεια / </Link><Link to="/help_teachers">Διδάσκοντες / </Link><span>Δημιουργία Βαθμολογίου</span></div>
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
            <li>Πατήστε το κουμπί <span class="bold">Δημιουργία Βαθμολογία</span> που βρίσκεται πάνω δεξιά.</li>
            <li><span class="bold">Μαζικά:</span> Εάν επιθυμείτε να δημιουργήσετε βαθμολόγιο με ανέβασμα έτοιμου αρχείου με βαθμολογίες, πατήστε <span class="bold">Μαζικά</span>. Μετά πατήστε <span class="bold">Επιλογή Μαθήματος</span>, επιλέξτε το μάθημα για το οποίο ενδιαφέρεστε και πατήστε το κουμπί Ανέβασμα Εγγράφου.</li>
            <li><span class="bold">Μεμονωμένα:</span> Εάν επιθυμείτε να δημιουργήσετε βαθμολόγιο με εισαγωγή των βαθμών μεμονωμένα, πατήστε <span class="bold">Μεμονωμένα</span>. Μετά πατήστε <span class="bold"></span>Επιλογή Μαθήματος και επιλέξτε το μάθημα για το οποίο ενδιαφέρεστε. Πλοηγηθείτε στον κατάλογο των φοιτητών με την μπάρα πλοήγησης και εισάγετε τον βαθμό του κάθε φοιτητή στο πλαίσιο κάτω από την <span class="bold">Βαθμολογία</span>.</li>
            <li>Πατήστε το κουμπί <span class="bold">Προσωρινή Αποθήκευση</span>.</li>
            <li>Αν επιθυμείτε να αλλάξετε κάτι σας δίνεται η δυνατότητα διαγραφής ενός βαθμού καθώς και η επιλογή να γυρίσετε πίσω για να εισάγετε βαθμούς και σε άλλους φοιτητές ή να αλλάξετε κάποιον βαθμό. Τα βαθμολόγια που είναι σε κατάσταση προσωρινής αποθήκευσης βρίσκονται στην λίστα των βαθμολογίων.</li>
            <li>Ελέγξτε ότι έχετε εισάγει σωστούς βαθμούς.</li>
            <li>Πατήστε <span class="bold">Οριστική Υποβολή</span>.</li>
            <br></br>
            <div className="italic">Σημείωση : Όταν πατήσετε Οριστική Υποβολή δεν θα έχετε την δυνατότητα να τροποποιήσετε περαιτέρω το βαθμολόγιο σας.</div>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}