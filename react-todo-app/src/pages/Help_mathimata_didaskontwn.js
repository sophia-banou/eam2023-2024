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
        <div className="breadcrumb_body5">{Arxiki()} <Link to="/help">Βοήθεια / </Link><Link to="/help_teachers">Διδάσκοντες / </Link><span>Πληροφορίες Μαθημάτων</span></div>
        <Link to="/help_teachers">
                <img src="back-arrow.png" class="arrow-icon3"></img>
        </Link>
        <div className="body_hdilosis">
            <div className="little_box">
            <img className="himage3" alt="" src="/mathima.png" />
            <div className="help_dilosi_div2">Πληροφορίες Μαθημάτων</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p id="paragraph">
            Για να δείτε πληροφορίες για τα μαθήματα που διδάσκετε: 
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε το κουμπί <span class="bold"> "Πληροφορίες Μαθημάτων" </span> από την αρχική οθόνη.</li>
            <li>Πατήστε το κουμπί <span class="bold"> "Επιλέξτε μάθημα"</span> και πατήστε πάνω στο όνομα του μαθήματος που σας ενδιαφέρει ώστε να εμφανιστούν οι πληροφορίες του. </li>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}