import React from "react"
import { Link } from "react-router-dom";
import './../css/App.css';
import './../css/Help_students.css';
import Nav1 from "./../components/Nav1.js"
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import {Arxiki} from "../Utils/Methods/index.js"

export default function Help_students() {
    if (localStorage.getItem('role') === null) {
        var nav = <Nav1 />;
      } else {
        var nav = <Nav2 />;
      }   
  return (
    <div>
        <div>{nav}</div>
        <div className="breadcrumb_body">{Arxiki()} <Link to="/help">Βοήθεια> </Link><span>Φοιτητές</span></div>
        <div className="body2">
            <div className="div2">ΚΑΤΗΓΟΡΙΕΣ</div>

            <Link to="/help_dilosi">
            <div className="rectangle-parent">
                <div><img  className="himage" alt="" src="/dhlwsh.png" /> </div>
                <div className="div">Δήλωση Μαθήματος
                    <div className="div1">Δημιουργία καινούργιας δήλωσης μαθημάτων</div>
                </div>  
            </div>
            </Link>

            <Link to="/help_bathmos">
            <div className="rectangle-group">
                <div><img className="himage" alt="" src="/bathmologia.png" /> </div>
                <div className="div">Προβολή Βαθμολογιών
                    <div className="div1"> Εκτύπωση ή αποθήκευση μίας ή περισσότερων βαθμολογιών</div>
                </div>                
            </div>
            </Link>
            <Link to="/help_pistopoihtiko">
            <div className="rectangle-container">
                <div> <img className="himage" alt="" src="/pistopoihtiko.png" /> </div>
                <div className="div">Έκδοση Πιστοποιητικού
                    <div className="div1">Δημιουργία αίτησης για έκδοση <br></br> πιστοποιητικού καθορισμένου από την γραμματεία</div>
                </div>
            </div>
            </Link>
            <Link to="/help_mathima">
                <div className="group-div">
                <div><img className="himage" alt="" src="/mathima.png" /> </div>
                <div className="div">Πληροφορίες Μαθημάτων
                    <div className="div1"> Πληροφορίες για όλα τα μαθήματα του Προγράμματος Σπουδών</div>
                </div>
            </div>
            </Link>
            <Link to="/help_aithseis">
            <div className="rectangle-parent1">
                <div><img className="himage" alt="" src="/aithseis.png" /> </div>
                <div className="div">Παλιότερες Αιτήσεις και Δηλώσεις
                    <div className="div1">Παραλαβή πιστοποιητικών ή έλεγχος <br></br>κατάστασης δηλώσεων</div>
                </div>
            </div>
            </Link>
            <Link to="/help_profile">
            <div className="rectangle-parent2">
                <div><img className="himage" alt="" src="/profile.png" /> </div>
                <div className="div">Επεξεργασία Προφίλ
                    <div className="div1">Δυνατότητα προβολής και επεξεργασίας του προφίλ</div>
                </div>   
            </div>
            </Link>
        </div>
        <Footer />
    </div>
  );
}