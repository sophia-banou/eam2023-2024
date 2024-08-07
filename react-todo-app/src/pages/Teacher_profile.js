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
            window.location.href = '/login2'
        }
    },[])
    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to ="/teachers">Αρχική / </Link> <span>Προφίλ</span></div>
            <div class="pr-button-div">
                <div class="pr-button-div2">
                    <div class="edit-div1" >
                        <Link class="link" to="/edit_teacher_profile">
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
                </div>
                <div class="sp-div1" onLoad={btnTab4}>
                    <div class="sp-div2">
                        <img src="avatar-icon.png" class="sp-icon"></img>
                        <div class="sp-div3">
                            <div className="sp-text1">{localStorage.getItem("name")} </div>
                        </div>
                    </div>
                    <div class="div-table">
                        <table class="sp-table1">
                            <tr>
                                <th id="tpb1" onClick={btnTab4} class="active2">Προσωπικά Στοιχεία</th>
                                <th id="tpb3" onClick={btnTab5} class="cell2">Πληροφορίες Επικοινωνίας</th>

                            </tr>
                        </table>

                        <table id="ttable1" class="pr-table2">
                            <tr>
                                <th>Ονοματεπώνυμο</th>
                                <td>{localStorage.getItem("name")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Ημερομηνία Γέννησης</th>
                                <td>{localStorage.getItem("dob")}</td>
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
                       
                        <table id="ttable3" class="pr-table2">

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