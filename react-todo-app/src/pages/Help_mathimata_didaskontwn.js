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
            <img className="himage3" alt="" src="/mathima.png" />
            <div className="help_dilosi_div2">Πληροφορίες Μαθημάτων</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p>
            Για να δείτε πληροφορίες για τα μαθήματα που διδάσκετε: 
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε την επιλογή ΜΑΘΗΜΑΤΑ από το μενού.</li>
            <li>Πατήστε στο όνομα του μαθήματος που σας ενδιαφέρει, ώστε να εμφανιστούν οι πληροφορίες του. Εάν θέλετε να δείτε τις πληροφορίες άλλου μαθήματος, πατήστε ξανά στο όνομα του προηγούμενου μαθήματος ώστε να αποκρυφθούν οι πληροφορίες του.</li>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}