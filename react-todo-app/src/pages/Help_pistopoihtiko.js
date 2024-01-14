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
            <img className="himage3" alt="" src="/pistopoihtiko.png" />
            <div className="help_dilosi_div2">Έκδοση Πιστοποιητικού</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p>
            Για να λάβετε ένα πιστοποιητικό απο την γραμματεία:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε στην επιλογή ΑΙΤΗΣΗ ΠΙΣΤΟΠΟΙΗΤΙΚΟΥ από το μενού.</li>
            <li>Επιλέξτε μία από τις διαθέσιμες κατηγορίες πιστοποιητικών που έχει καθορίσει η γραμματεία.</li>
            <li>Έλεγξτε για την ορθότητα των στοιχείων της αίτησης και πατήστε Υποβολή.</li>
            <li>Μπορείτε να ελέγξετε την κατάσταση του πιστοποιητικού σας και να το εκτυπώσετε στο Ιστορικό που βρίσκεται στο Προφίλ.</li>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}