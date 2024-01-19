import React from "react"
import './../css/App.css';
import './../css/Help_dilosi.css';
import Nav1 from "./../components/Nav1.js"
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"

export default function Help() {
  if (localStorage.getItem('role') === null) {
    var nav = <Nav1 />;
  } else {
    var nav = <Nav2 />;
}
  return (
    <div>
        <div>{nav}</div>
        <div className="body_hdilosis">
            <div className="little_box">
            <img className="himage3" alt="" src="/aithseis.png" />
            <div className="help_dilosi_div2">Παλαιότερες Αιτήσεις και Δηλώσεις</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p id="paragraph">
            Για να δείτε παλαιότερες δηλώσεις, να δείτε την κατάσταση των πιστοποιητικών που έχετε αιτηθεί και να τροποποιήσετε δηλώσεις που βρίσκονται σε κατάσταση προσωρινής αποθήκευσης:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε πάνω δεξιά όπου θα βρείτε το προφίλ σας.</li>
            <li>Στο προφίλ σας πατήστε την επιλογή <span class="bold">Ιστορικό</span>.</li>
            <li>Πλοηγηθείτε στους πίνακες των <span class="bold">Δηλώσεων </span>και των <span class="bold">Πιστοποιητικών </span>χρησιμοποιώντας την μπάρα πλοήγησης.</li>
            <li>Στις δηλώσεις σας δίνεται η δυνατότητα προεπισκόπησης της δήλωσης που σας ενδιαφέρει και εφόσον η δήλωση βρίσκεται σε κατάσταση προσωρινής αποθήκευσης μπορείτε να την τροποποιήσετε και να την υποβάλετε οριστικά.</li>
            <li>Στα πιστοποιητικά σας δίνετε η δυνατότητα προβολής, αποθήκευσης και εκτύπωσης των πιστοποιητικών που έχουν εγκριθεί και σταλθεί από την Γραμματεία, μέσω των ενεργειών που δίνονται στα δεξιά του κάθε πίνακα.</li>
            <li>Στις δηλώσεις σας δίνεται η δυνατότητα εκτύπωσης και αποθήκευσης της δήλωσης που σας ενδιαφέρει, μέσω των ενεργειών που δίνονται στα δεξιά του κάθε πίνακα.</li>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}