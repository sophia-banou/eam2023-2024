import React from "react"
import './../css/App.css';
import './../css/Help_students.css';
import Nav1 from "./../components/Nav1.js"
import Footer from "./../components/footer.js"

export default function Help_students() {
  return (
    <div>
        <Nav1 />
        <div className="body">
            <div className="div2">Κατηγορίες</div>
            <div className="rectangle-parent">
                <img className="image" alt="" src="/dhlwsh.png" />
                <div className="div">Δήλωση Μαθήματος
                    <div className="div1">Δημιουργία καινούργιας δήλωσης μαθημάτων</div>
                </div>
                
            </div>
            <div className="rectangle-group">
                <img className="image" alt="" src="/bathmologia.png" />
                <div className="div">Προβολή Βαθμολογιών
                    <div className="div1"> Εκτύπωση ή αποθήκευση μίας ή περισσότερων βαθμολογιών</div>
                </div>
                               
            </div>
            <div className="rectangle-container">
                <img className="image" alt="" src="/pistopoihtiko.png" />
                <div className="div">Έκδοση Πιστοποιητικού
                    <div className="div1">Δημιουργία αίτησης για έκδοση πιστοποιητικού καθορισμένου από την γραμματεία</div>
                </div>
                
            </div>
            <div className="group-div">
                <img className="image" alt="" src="/mathima.png" />
                <div className="div">Πληροφορίες Μαθημάτων
                    <div className="div1"> Πληροφορίες για όλα τα μαθήματα του Προγράμματος Σπουδών</div>
                </div>
                
            </div>
            <div className="rectangle-parent1">
                <img className="image" alt="" src="/aithseis.png" />
                <div className="div">Παλιότερες Αιτήσεις και Δηλώσεις
                    <div className="div1">Παραλαβή πιστοποιητικών ή έλεγχος κατάστασης δηλώσεων</div>
                </div>
                
            </div>
            <div className="rectangle-parent2">
                <img className="image" alt="" src="/profile.png" />
                <div className="div">Επεξεργασία Προφίλ
                    <div className="div1">Δυνατότητα προβολής και επεξεργασίας του προφίλ</div>
                </div>
                
            </div>
        </div>
        <Footer />
    </div>
  );
}