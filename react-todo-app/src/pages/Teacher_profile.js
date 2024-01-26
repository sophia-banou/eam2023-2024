import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/teacher_menu.js"
import "./../css/student_profile.css";
import {useEffect } from 'react';
import { logout, btnTab4, btnTab5} from '../Utils/Methods/index.js';
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";

export default function TeacherProfile() {
    useEffect(()=> {
        //getDilosi();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "teacher") {
            window.location.href = '/'
        }
    },[])
    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to ="/teachers">Αρχική / </Link> <span>Προφίλ</span></div>
            <div class="sp">
                <div class="sp-div">
                </div>
                <div class="sp-div1" onLoad={btnTab4}>
                    <div class="sp-div2">
                        <img src="profile-icon.png" class="sp-icon"></img>
                        <div class="sp-div3">
                            <div className="sp-text1">{localStorage.getItem("name")} </div>
                            <div className="sp-text2">{localStorage.getItem("am")} </div>
                        </div>
                        <button onClick={logout} className='logout'>Αποσύνδεση</button>
                        <Link to="/edit_teacher_profile">
                            <button class="edit-button">
                                <img src="./edit-icon.png" class="edit-icon"></img>
                                <p>Επεξεργασία</p>
                            </button>
                        </Link>
                    </div>
                    <div class="div-table">
                        <table class="sp-table1">
                            <tr>
                                <th id="tpb1" onClick={btnTab4} class="active">Προσωπικά Στοιχεία</th>
                                {/*<th id="pb2" onClick={btnTab2} class="cell">Επαγγελματική Σταδιοδρομία</th> */}
                                <th id="tpb3" onClick={btnTab5} class="cell">Πληροφορίες Επικοινωνίας</th>

                            </tr>
                        </table>

                        <table id="ttable1" class="sp-table2">
                            <tr>
                                <th>Ονοματεπώνυμο</th>
                                <td>{localStorage.getItem("name")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Ημερομηνία Γέννησης</th>
                                <td>{localStorage.getItem("dob")}</td>
                            </tr>
                            {/* <tr>
                                <th>Αριθμός Μητρώου</th>
                                <td>{localStorage.getItem("am")}</td>
                            </tr> */}
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
                        {/* <table id="table2" class="sp-table2">

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

                        </table> */}
                        <table id="ttable3" class="sp-table2">

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
                                <th>Διεύθυνση Ηλεκτρονικού Ταχυδρομίου</th>
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