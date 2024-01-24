import React from "react";
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import { doc, getDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"
import { checkAll, GetCheckboxValue } from '../Utils/Methods/index.js';
import Message from '../components/dilosi_message.js';
import Message2 from '../components/dilosi_reject.js';

function getDate() {
    const today = new Date();
    return today;
}

export default function Student_dilosi() {
    const [message, setMessage] = useState();
    const [currentDate, setCurrentDate] = useState(getDate());

    async function handleDate() {

        const ref1 = doc(db, "prothesmia", "start");
        const res1 = await getDoc(ref1);

        const start_year = res1.data().year
        const start_month = res1.data().month
        const start_day = res1.data().day

        const ref2 = doc(db, "prothesmia", "end");
        const res2 = await getDoc(ref2);

        const end_year = res2.data().year
        const end_month = res2.data().month
        const end_day = res2.data().day

        const start = new Date(start_year, start_month - 1, start_day);
        const end = new Date(end_year, end_month - 1, end_day);
        if (start <= currentDate && currentDate <= end) {
            var m = <Message />
            setMessage(m)
        }
        else {
            var m = <Message2 />
            setMessage(m)
        }
        localStorage.setItem('startyear', start_year)
        localStorage.setItem('startmonth', start_month)
        localStorage.setItem('startday', start_day)
        localStorage.setItem('endyear', end_year)
        localStorage.setItem('endmonth', end_month)
        localStorage.setItem('endday', end_day)
    }
    useEffect(() => {
        handleDate();
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    }, [])

    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to="/students">Αρχική / </Link><span>Δήλωση μαθημάτων</span></div>
            <div class="title">ΔΗΛΩΣΗ ΜΑΘΗΜΑΤΩΝ</div>
            <div>{message}</div>
            {/* <div class="d-div1">  
            <div class="button-div"> <button onClick={checkAll}> Επιλογή Όλων</button> </div>     
                <div class="div-table">
                    <table class="d-table2">
                        <tr>
                            <th class="dcell"></th>
                            <th class="dcell">Όνομα μαθήματος</th>
                            <th class="dcell">Κατεύθυνση</th>
                            <th class="dcell">Εξάμηνο</th>
                            <th class="dcell">Κατηγορία</th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" class="cb" id="check1" value="eam"/></th>
                            <th>Επικοινωνία Ανθρώπου Μηχανής</th>
                            <th>Α</th>
                            <th>7ο</th>
                            <th>Κατ' Επιλογήν Υποχρεωτικό</th>
                        </tr>
                        <tr class="drow2">
                            <th><input type="checkbox" class="cb" id="check2" value="ss"/></th>
                            <th>Σήματα & Συστήματα</th>
                            <th>Κοινό</th>
                            <th>3ο</th>
                            <th>Υποχρεωτικό</th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" class="cb" id="check3" value="tn"/></th>
                            <th>Τεχνητή Νοημοσύνη Ι</th>
                            <th>Α</th>
                            <th>5ο</th>
                            <th>Προαιρετικό</th>
                        </tr>
                        <tr class="drow2">
                            <th><input type="checkbox" class="cb" id="check4" value="g1"/></th>
                            <th>Γραφικά Ι</th>
                            <th>Α</th>
                            <th>5ο</th>
                            <th>Προαιρετικό</th>
                        </tr>
                    </table>
                </div>

                <div className="dilosi_rectangle1">
                    <div onClick={GetCheckboxValue} className="dilosi_div">Προσωρινή Αποθήκευση</div>
                </div>
                
            </div>
            <h4 class="error1" id="result"></h4>   */}


            <Footer />
        </div>
    );
}