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
        <div className="breadcrumb_body">{Arxiki()} <Link to="/help">Βοήθεια / </Link> <Link to="/help_students">Φοιτητές / </Link> <span>Παλαιότερες Αιτήσεις και Δηλώσεις</span></div>
        <div className="body_hdilosis">
            <div className="little_box">
            <img className="himage3" alt="" src="/aithseis.png" />
            <div className="help_dilosi_div2">Παλαιότερες Αιτήσεις και Δηλώσεις</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p id="paragraph">
            Για να δείτε ή να τροποποιήσετε τις δηλώσεις σας και να δείτε τα πιστοποιητικά που έχετε αιτηθεί:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε το κουμπί <span class="bold"> "Ιστορικό" </span> από την αρχική οθόνη.</li>
            <li>Πλοηγηθείτε στους πίνακες των <span class="bold">Δηλώσεων </span>και των <span class="bold">Πιστοποιητικών </span>.</li>
            <li>Στις δηλώσεις σας δίνεται η δυνατότητα προβολης της δήλωσης που σας ενδιαφέρει και εφόσον η δήλωση βρίσκεται σε κατάσταση προσωρινής αποθήκευσης μπορείτε να την τροποποιήσετε και να την υποβάλετε οριστικά.</li>
            <li>Στα πιστοποιητικά σας δίνετε η δυνατότητα προβολής και αποθήκευσης των πιστοποιητικών για τα οποία έχετε αιτηθεί.</li>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}