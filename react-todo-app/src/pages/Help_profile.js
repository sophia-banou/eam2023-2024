import React from "react"
import './../css/App.css';
import './../css/Help_dilosi.css';
import Nav1 from "./../components/Nav1.js"
import Footer from "./../components/footer.js"

export default function Help() {
  return (
    <div>
        <Nav1 />
        <div className="body_hdilosis">
            <div className="little_box">
            <img className="himage3" alt="" src="/profile.png" />
            <div className="help_dilosi_div2">Επεξεργασία Προφίλ</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p>
            Για να δείτε και να τροποποιήσετε τα στοιχεία του προφίλ σας:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε πάνω δεξιά όπου θα βρείτε το προφίλ σας.</li>
            <li>Στο προφίλ σας πατήστε το κουμπί Επεξεργασία.</li>
            <li>Για να αλλάξετε φωτογραφία προφίλ πατήστε στο κουμπί Επιλέξτε Αρχείο και επισυνάψετε ένα αρχείο τύπου png ή jpeg από την συσκευή που χρησιμοποιείτε.</li>
            <li>Πλοηγηθείτε στον πίνακα με τις προσωπικές σας πληροφορίες μέσω των τριών επιλογών που σας δίνονται, Προσωπικά στοιχεία, Σχετικά με τις Σπουδές,  Πληροφορίες Επικοινωνίας και τροποποιήστε τα στοιχεία που επιθυμείτε συμπληρώνοντας τα πλαίσια.</li>
            <li>Μόλις τελειώσετε με τις τροποποιήσεις πατήστε το κουμπί Αποθήκευση για να αποθηκευτούν οι αλλαγές.</li>

            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}