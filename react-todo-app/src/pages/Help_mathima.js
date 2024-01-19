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
        <div className="breadcrumb_body">{Arxiki()} <Link to="/help">Βοήθεια> </Link> <Link to="/help_students">Φοιτητές> </Link><span>Πληροφορίες Μαθήματος</span></div>
        <div className="body_hdilosis">
            <div className="little_box">
            <img className="himage3" alt="" src="/mathima.png" />
            <div className="help_dilosi_div2">Πληροφορίες Μαθήματος</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p id="paragraph">
            Για να δείτε τις πληροφορίες ενός μαθήματος από το Πρόγραμμα Σπουδών σας:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε την επιλογή <span class="bold">ΜΑΘΗΜΑΤΑ</span> από το μενού.</li>
            <li>Πλοηγηθείτε στον πίνακα των μαθημάτων χρησιμοποιώντας την μπάρα πλοήγησης.</li>
            <li>Αν ενδιαφέρεστε για να λάβετε πληροφορίες για κάποιο μάθημα μπορείτε να πατήσετε πάνω στο όνομα του και θα σας μεταφέρει στην σελίδα του συγκεκριμένου μαθήματος.</li>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}