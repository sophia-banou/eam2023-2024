import React from "react";
import { useEffect } from 'react';
import { db } from '../components/firebase.js';
import {Link} from "react-router-dom";
import {doc, getDoc} from 'firebase/firestore'
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav1 from "./../components/Nav1.js"
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Student_mathimata() {
    if (localStorage.getItem('role') === null) {
        var nav = <div> <Nav1 />
        <div class="breadcrumb_body5"><Link to="/">Αρχική / </Link> <Link to="/student_mathimata">Μαθήματα / </Link><span>Πληροφορίες μαθήματος</span></div>
    </div>;
        
    } else if (localStorage.getItem('role') === "student"){
        var nav = <div> <Nav2 />
            <Menu />
            <div class="breadcrumb_body5"><Link to="/students">Αρχική / </Link> <Link to="/student_mathimata">Μαθήματα / </Link><span>Πληροφορίες μαθήματος</span></div>
        </div>;
    }
    return (
        <div> 
            <div>{nav}</div>
            <div class="m-div1"> 
                <div className="title">{sessionStorage.getItem("m_name")}</div>
                <table class="m-table1">
                            <tr>
                                <th class="mcell">Γενικές Πληροφορίες</th>
                            </tr>
                </table> 
                <table id="table1" class="m-table2">
                            <tr>
                                <th>Εξάμηνο</th>
                                <td>{sessionStorage.getItem("m_semester")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Τύπος μαθήματος</th>
                                <td>{sessionStorage.getItem("m_category")}</td>
                            </tr>
                            <tr>
                                <th>Κατεύθυνση</th>
                                <td>{sessionStorage.getItem("m_track")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Κωδικός</th>
                                <td>{sessionStorage.getItem("m_id")}</td>
                            </tr>
                            <tr>
                                <th>ECTs</th>
                                <td>{sessionStorage.getItem("m_ects")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Ειδικεύσεις</th>
                                <td>{sessionStorage.getItem("m_eidikeuseis")}</td>
                            </tr>
                            <tr>
                                <th>Προαπαιτούμενα μαθήματα</th>
                                <td>{sessionStorage.getItem("m_proapaitoumena")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Διδάσκοντας</th>
                                <td>{sessionStorage.getItem("m_professor")}</td>
                            </tr>
                            <tr>
                                <th>Προτεινόμενο σύγγραμμα</th>
                                <td>{sessionStorage.getItem("m_book")}</td>
                            </tr>
                </table>
            </div>
            <Footer />
        </div>
    );
}
