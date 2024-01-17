import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/student_menu.js"
import "./../css/student_profile.css";
import { logout } from '../Utils/Methods';
import Footer from "./../components/footer.js"

export default function StudentProfile() {
    return (
        <div>
            <Nav2 />
            <Menu />
            <div class="sp-div1">
                <div class="sp-div2">
                    <img src="profile-icon.png" class="sp-icon"></img>
                    <div class="sp-div3">
                        <div className="sp-text1">{localStorage.getItem("name")} </div>
                        <div className="sp-text2">{localStorage.getItem("am")} </div>
                    </div>
                    <button onClick={logout} className='logout'>Logout</button>
                </div>
                <div class="div-table">
                    <table class="sp-table1">
                        <tr>
                            <th class="active">Προσωπικά Στοιχεία</th>
                            <th class="cell">Σχετικά με τις Σπουδές</th>
                            <th class="cell">Πληροφορίες Επικοινωνίας</th>
                        </tr>
                    </table>

                    <table class="sp-table2">
                        <tr>
                            <th>Ονοματεπώνυμο</th>
                            <td>{localStorage.getItem("name")}</td>
                        </tr>
                        <tr class="row2">
                            <th>Ημερομηνία Γέννησης</th>
                            <td>{localStorage.getItem("dob")}</td>
                        </tr>
                        <tr>
                            <th>Αριθμός Μητρώου</th>
                            <td>{localStorage.getItem("am")}</td>
                        </tr>
                        <tr class="row2">
                            <th>Εξάμηνο Φοίτησης</th>
                            <td>{localStorage.getItem("semester")}</td>
                        </tr>
                        <tr>
                            <th>Οικογενειακή Κατάσταση</th>
                            <td>{localStorage.getItem("marital_status")}</td>
                        </tr>
                        <tr class="row2">
                            <th>Όνομα Πατέρα</th>
                            <td>{localStorage.getItem("father_name")}</td>
                        </tr>
                        <tr>
                            <th>Όνομα Μητέρας</th>
                            <td>{localStorage.getItem("mother_name")}</td>
                        </tr>
                        <tr class="row2">
                            <th>Πολή/ Χωριό Γέννησης</th>
                            <td>{localStorage.getItem("pob")}</td>
                        </tr>
                        <tr>
                            <th>Αριθμός Ταυτότητας</th>
                            <td>{localStorage.getItem("id")}</td>
                        </tr>
                        <tr class="row2">
                            <th>ΑΜΚΑ</th>
                            <td>{localStorage.getItem("AMKA")}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer />
        </div>

    )
}