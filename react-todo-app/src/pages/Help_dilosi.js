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
        <div className="breadcrumb_body">{Arxiki()} <Link to="/help">Βοήθεια / </Link> <Link to="/help_students">Φοιτητές / </Link><span>Δήλωση Μαθήματος</span></div>
        <div className="body_hdilosis">
            <div className="little_box">
            <img className="himage3" alt="" src="/dhlwsh.png" />
            <div className="help_dilosi_div2">Δήλωση Μαθήματος</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p>
            <div className="bold">Για τους πρωτοετείς φοιτητές τα μαθήματα δηλώνονται από την γραμματεία.
            Αν είστε φοιτητής μεγαλύτερου έτους πρέπει να δηλώσετε τα μαθήματα που σας ενδιαφέρουν κατά την περίοδο δηλώσεων.</div>
            <br></br>

            Για να δηλώσετε τα μαθήματα που σας ενδιαφέρουν:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε το κουμπί <span class="bold">"Δήλωση Μαθημάτων"</span> από την αρχική οθόνη.</li>
            <li>Επιλέξτε τα μαθήματα που ενδιαφέρεστε να παρακολουθήσετε στο τρέχον εξάμηνο, λαμβάνοντας υπόψη το όριο δήλωσης μαθημάτων του εξαμήνου σας και πατήστε <span class="bold">Προσωρινή αποθήκευση</span>.
              <br></br>Όσο μία δήλωση βρίσκεται σε κατάσταση προσωρινής αποθήκευσης μπορείτε να την δείτε και να την επεξεργαστείτε από το <span class="bold">Iστορικό</span>. Οι δηλώσεις που βρίσκονται σε κατάσταση προσωρινής αποθήκευσης θα πρέπει να οριστικοποιηθούν μέχρι το τέλος της περιόδου δηλώσεων αλλιώς θα λήξουν.
              Για να δείτε το <span class="bold">Iστορικό</span> μεταβείτε πρώτα στο <span class="bold"> Προφίλ</span> σας πατώντας πάνω δεξιά και έπειτα πατήστε το κουμπί <span class="bold">Ιστορικό</span>.</li>
            <li>Εάν είστε σίγουροι για την επιλογή των μαθημάτων σας πατήστε το κουμπί <span class="bold">Οριστική Υποβολή</span>.</li>
            <li>Μπορείτε να δείτε την δήλωση σας ή να επιστρέψετε στην αρχική σελίδα, πατώντας τα αντίστοιχα κουμπιά.</li>

            <br></br>

<           div className="italic">Σημείωση : Όταν πατήσετε Οριστική Υποβολή δεν θα έχετε την δυνατότητα να τροποποιήσετε περαιτέρω την δήλωση σας, θα μπορείτε όμως να την δείτε από το Ιστορικό.</div>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}