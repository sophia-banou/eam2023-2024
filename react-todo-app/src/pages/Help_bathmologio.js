import React from "react"
import './../css/App.css';
import './../css/Help_dilosi.css';
import Nav1 from "../components/Nav1.js"
import Footer from "../components/footer.js"

export default function Help() {
  return (
    <div>
        <Nav1 />
        <div className="body_hdilosis">
            <div className="little_box">
            <img className="himage3" alt="" src="/aithseis.png" />
            <div className="help_dilosi_div2">Παλαιότερα Βαθμολόγια</div>
            </div>
            <br></br>
            <div className="help_gray_rectangle">
            <p>
            Για να δείτε ή να επεξεργαστείτε και να οριστικοποιήσετε παλαιότερα βαθμολόγια:
            <li>Συνδεθείτε στον ακαδημαϊκό σας λογαριασμό.</li>
            <li>Πατήστε την επιλογή ΒΑΘΜΟΛΟΓΙΑ από το μενού.</li>
            <li>Πατήστε στο όνομα του μαθήματος που σας ενδιαφέρει.</li>
            <li>Πλοηγηθείτε στον κατάλογο των βαθμολογίων μέσω της μπάρας πλοήγησης.</li>
            <li>Όταν βρείτε το βαθμολόγιο που σας ενδιαφέρει πατήστε στο εικονίδιο <img width="16" height="16" src="https://img.icons8.com/material-outlined/24/visible--v1.png" alt="visible--v1"/> για να δείτε το βαθμολόγιο και το εικονίδιο <img width="16" height="16" src="https://img.icons8.com/ios/50/create-new.png" alt="create-new"/> για να το επεξεργαστείτε και να το οριστικοποιήσετε, εφόσον βρίσκεται σε κατάσταση προσωρινής αποθήκευσης.</li>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}