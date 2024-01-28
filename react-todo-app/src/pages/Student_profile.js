import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/student_menu.js"
import { useEffect } from 'react';
import "./../css/student_profile.css";
import { logout, btnTab1, btnTab2, btnTab3 } from '../Utils/Methods/index.js';
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";

export default function StudentProfile() {

    useEffect(() => {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/login2'
        }
    }, [])

    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to="/students">Αρχική / </Link><span>Προφίλ</span></div>
            <div class="pr-button-div">
                <div class="pr-button-div2">
                    <div class="edit-div1" >
                        <Link class="link" to="/edit_profile">
                        <div class="edit-div1-button">

                            <div>ΕΠΕΞΕΡΓΑΣΙΑ ΠΡΟΦΙΛ</div>
                            <img src="edit-icon.png" alter="Edit" class="edit-icon"></img>

                        </div>
                        </Link>


                    </div>

                    <div class="edit-div1" >
                            <div onClick={logout}  class="edit-div2-button">

                                
                                <div>ΑΠΟΣΥΝΔΕΣΗ</div>
                                <img src="logout-icon.png" alter="Logout" class="edit-icon"></img>
                            </div>

                    </div>
                </div>
            </div>
            <div class="sp">

                <div class="sp-div">
                    <Link class="link" to="/istoriko">
                        <div class="sp-box">
                            <img src="./aithseis.png"></img>
                            <p><h>Ιστορικό </h> <br></br>Δείτε παλαιότερες δηλώσεις και ελέγξτε την κατάσταση των αιτήσεων σας</p>

                        </div>
                    </Link>

                </div>


                <div class="sp-div1">
                    <div class="sp-div2">
                        <img src="avatar-icon.png" class="sp-icon"></img>
                        <div class="sp-div3">
                            <div className="sp-text1">{localStorage.getItem("name")} </div>
                            <div className="sp-text2">{localStorage.getItem("am")} </div>
                        </div>


                    </div>
                    <div class="div-table">
                        <table class="sp-table1">
                            <tr>
                                <th id="pb1" onClick={btnTab1} class="active">Προσωπικά Στοιχεία</th>
                                <th id="pb2" onClick={btnTab2} class="cell">Σχετικά με τις Σπουδές</th>
                                <th id="pb3" onClick={btnTab3} class="cell">Πληροφορίες Επικοινωνίας</th>

                            </tr>
                        </table>

                        <table id="table1" class="sp-table2">
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
                                <th>Οικογενειακή Κατάσταση</th>
                                <td>{localStorage.getItem("marital_status")}</td>
                            </tr>
                            <tr>
                                <th>Όνομα Πατέρα</th>
                                <td>{localStorage.getItem("fn")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Όνομα Μητέρας</th>
                                <td>{localStorage.getItem("mn")}</td>
                            </tr>
                            <tr>
                                <th>Πολή/ Χωριό Γέννησης</th>
                                <td>{localStorage.getItem("pob")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Αριθμός Ταυτότητας</th>
                                <td>{localStorage.getItem("id")}</td>
                            </tr>
                            <tr>
                                <th>ΑΜΚΑ</th>
                                <td>{localStorage.getItem("AMKA")}</td>
                            </tr>
                        </table>
                        <table id="table2" class="sp-table2">

                            <tr>
                                <th>Εξάμηνο Φοίτησης</th>
                                <td>{localStorage.getItem("semester")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Ακαδημαϊκό Έτος 1ης Εγγραφής</th>
                                <td>{localStorage.getItem("year1")}</td>
                            </tr>
                            <tr>
                                <th>Ημερομηνία 1ης Εγγραφής</th>
                                <td>{localStorage.getItem("date1")}</td>
                            </tr>

                        </table>
                        <table id="table3" class="sp-table2">

                            <tr>
                                <th>Διεύθυνση Κατοικίας</th>
                                <td>{localStorage.getItem("address")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Πόλη Κατοικίας</th>
                                <td>{localStorage.getItem("city")}</td>
                            </tr>
                            <tr>
                                <th>Τηλέφωνο Κατοικίας</th>
                                <td>{localStorage.getItem("phone1")}</td>
                            </tr>
                            <tr class="row2">
                                <th>ΤΚ Κατοικίας</th>
                                <td>{localStorage.getItem("code")}</td>
                            </tr>
                            <tr>
                                <th>Κινητό Τηλέφωνο</th>
                                <td>{localStorage.getItem("phone2")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Διεύθυνση Ηλεκτρονικού Ταχυδρομείου</th>
                                <td>{localStorage.getItem("email")}</td>
                            </tr>

                        </table>
                    </div>

                </div>
            </div>

            <Footer />

        </div >

    )
}