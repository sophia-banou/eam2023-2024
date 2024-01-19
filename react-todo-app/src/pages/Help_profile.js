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
        <div className="breadcrumb_body">{Arxiki()} <Link to="/help">Βοήθεια> </Link> <Link to="/help_students">Φοιτητές> </Link> <span>Επεξεργασία Προφίλ</span></div>
        <div className="body_hdilosis">
            <div className="little_box">
            <img className="himage3" alt="" src="/profile.png" />
            <div className="help_dilosi_div2">Επεξεργασία Προφίλ</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p id="paragraph">
            Για να δείτε και να τροποποιήσετε τα στοιχεία του προφίλ σας:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε πάνω δεξιά όπου θα βρείτε το προφίλ σας.</li>
            <li>Στο προφίλ σας πατήστε το κουμπί <span class="bold">Επεξεργασία</span>.</li>
            <li>Για να αλλάξετε φωτογραφία προφίλ πατήστε στο κουμπί <span class="bold">Επιλέξτε Αρχείο</span> και επισυνάψετε ένα αρχείο τύπου png ή jpeg από την συσκευή που χρησιμοποιείτε.</li>
            <li>Πλοηγηθείτε στον πίνακα με τις προσωπικές σας πληροφορίες μέσω των τριών επιλογών που σας δίνονται, <span class="bold">Προσωπικά στοιχεία</span>,  <span class="bold">Σχετικά με τις Σπουδές</span>,   <span class="bold">Πληροφορίες Επικοινωνίας</span> και τροποποιήστε τα στοιχεία που επιθυμείτε συμπληρώνοντας τα πλαίσια.</li>
            <li>Μόλις τελειώσετε με τις τροποποιήσεις πατήστε το κουμπί Αποθήκευση για να αποθηκευτούν οι αλλαγές.</li>

            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}