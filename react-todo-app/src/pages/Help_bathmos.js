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
            <img className="himage3" alt="" src="/bathmologia.png" />
            <div className="help_dilosi_div2">Προβολή Βαθμολογιών</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p>
            Για να ενημερωθείτε σχετικά με τις βαθμολογίες σας:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε την επιλογή ΒΑΘΜΟΛΟΓΙΕΣ από το μενού</li>
            <li>Πλοηγηθείτε στον πίνακα των βαθμολογιών σας μέσω της μπάρας πλοήγησης και επιλέξτε αυτές τις οποίες θέλετε να αποθηκεύσετε ή να εκτυπώσετε και πατήστε Επόμενο</li>
            <li>Επιβεβαιώστε ότι έχουν επιλεγεί οι βαθμολογίες που θέλετε και πατήστε Αποθήκευση ή Εκτύπωση.</li>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}