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
        <div className="breadcrumb_body">{Arxiki()} <Link to="/help">Βοήθεια> </Link> <Link to="/help_students">Φοιτητές> </Link><span>Δήλωση Μαθήματος</span></div>
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
            <li>Πατήστε την επιλογή <span class="bold">ΔΗΛΩΣΗ ΜΑΘΗΜΑΤΩΝ</span> από το μενού.</li>
            <li>Επιλέξτε τα μαθήματα που ενδιαφέρεστε να παρακολουθήσετε στο τρέχον εξάμηνο και πατήστε <span class="bold">Προσωρινή αποθήκευση</span>. Αν σε προηγούμενο εξάμηνο είχατε δηλώσει ένα μάθημα το οποίο την στιγμή που φτιάχνετε την δήλωση δεν έχει προβιβάσιμο βαθμό, αυτό το μάθημα επισημαίνεται με θαυμαστικό. Οι δηλώσεις που βρίσκονται σε κατάσταση προσωρινής αποθήκευσης είναι προσβάσιμες από το <span class="bold">Ιστορικό</span> που βρίσκεται στο <span class="bold">Προφίλ</span>.</li>
            <li>Βεβαιωθείτε ότι έχετε επιλέξει τα σωστά μαθήματα.</li>
            <li>Αν επιθυμείτε να αλλάξετε κάτι σας δίνεται η δυνατότητα διαγραφής ενός επιλεγμένου μαθήματος καθώς και η επιλογή να γυρίσετε πίσω για να επιλέξετε και άλλα μαθήματα.</li>
            <li>Πατήστε <span class="bold">Οριστική Υποβολή</span>.</li>
            <li>Μπορείτε να αποθηκεύσετε ή να εκτυπώσετε την δήλωση σας καθώς και να επιστρέψετε στην αρχική σελίδα, πατώντας τα αντίστοιχα κουμπιά.</li>

            <br></br>

<           div className="italic">Σημείωση : Όταν πατήσετε Οριστική Υποβολή δεν θα έχετε την δυνατότητα να τροποποιήσετε περαιτέρω την δήλωση σας.</div>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}