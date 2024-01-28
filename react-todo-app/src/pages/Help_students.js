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
        <div className="breadcrumb_body5">{Arxiki()} <Link to="/help">Βοήθεια / </Link><span>Φοιτητές</span></div>
        <Link to="/help">
                <img src="back-arrow.png" class="arrow-icon4"></img>
        </Link>
        <div class="title">Κατηγορίες</div>
        <div className="body2">
            
      

            <Link class="link" to="/help_dilosi">
            <div className="rectangle-parent">
                <div><img  className="himage" alt="" src="/dhlwsh.png" /> </div>
                    <div><p><h>Δήλωση Μαθήματος</h> <br></br>
                    Δημιουργία καινούργιας δήλωσης μαθημάτων
                    </p></div>
                                
            </div>
            </Link>

            <Link class="link" to="/help_bathmos">
            <div className="rectangle-group">
                <div><img className="himage" alt="" src="/bathmologia.png" /> </div>
                <div><p><h>Προβολή Βαθμολογιών </h> <br></br>
                     Εκτύπωση ή αποθήκευση μίας ή περισσότερων βαθμολογιών </p></div>
                            
            </div>
            </Link>
            <Link class="link" to="/help_pistopoihtiko">
            <div className="rectangle-container">
                <div> <img className="himage" alt="" src="/pistopoihtiko.png" /> </div>
                <div><p><h>Έκδοση Πιστοποιητικού </h> <br></br>
                   Δημιουργία αίτησης για έκδοση πιστοποιητικού καθορισμένου από την γραμματεία</p></div>
              
            </div>
            </Link>
            <Link class="link" to="/help_mathima">
                <div className="group-div">
                <div><img className="himage" alt="" src="/mathima.png" /> </div>
                <div><p><h>Πληροφορίες Μαθημάτων </h> <br></br>
                   Πληροφορίες για όλα τα μαθήματα του Προγράμματος Σπουδών</p> </div>
            
            </div>
            </Link>
            <Link class="link" to="/help_aithseis">
            <div className="rectangle-parent1">
                <div><img className="himage" alt="" src="/aithseis.png" /> </div>
                <div><p><h>Παλιότερες Αιτήσεις και Δηλώσεις </h> <br></br>
                    Παραλαβή πιστοποιητικών ή έλεγχος κατάστασης δηλώσεων</p></div>
          
            </div>
            </Link>
            <Link class="link"to="/help_profile">
            <div className="rectangle-parent2">
                <div><img className="himage" alt="" src="/profile.png" /> </div>
                <div><p><h>Επεξεργασία Προφίλ </h> <br></br>
                    Δυνατότητα προβολής και επεξεργασίας του προφίλ</p> </div>
                
            </div>
            </Link>
        </div>
        <Footer />
    </div>
  );
}