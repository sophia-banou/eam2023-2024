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
            <p id ="paragraph">
            Για να ενημερωθείτε σχετικά με τις βαθμολογίες σας:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε την επιλογή <span class="bold">ΒΑΘΜΟΛΟΓΙΕΣ </span>από το μενού</li>
            <li>Πλοηγηθείτε στον πίνακα των βαθμολογιών σας μέσω της μπάρας πλοήγησης και επιλέξτε αυτές τις οποίες θέλετε να αποθηκεύσετε ή να εκτυπώσετε <br></br>και πατήστε <span class="bold">Επόμενο</span></li>
            <li>Επιβεβαιώστε ότι έχουν επιλεγεί οι βαθμολογίες που θέλετε και πατήστε <span class="bold">Αποθήκευση</span> ή <span class="bold">Εκτύπωση</span>.</li>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}