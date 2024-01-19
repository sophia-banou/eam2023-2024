import React from "react";
import { useEffect } from 'react';
import { db } from '../components/firebase.js';
import {Link} from "react-router-dom";
import {checkAll, GetCheckboxValue2} from '../Utils/Methods/index.js';
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Student_dilosi() {

    useEffect(()=> {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    },[])

    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to="/students">Αρχική> </Link><span>Βαθμολογίες</span></div>
            <div class="d-div1">  
            <div class="button-div"> <button onClick={checkAll}> Επιλογή Όλων</button> </div>     
                <div class="div-table">
                    <table class="d-table2">
                        <tr>
                            <th class="dcell"></th>
                            <th class="dcell">Όνομα μαθήματος</th>
                            <th class="dcell">Βαθμός</th>
                            <th class="dcell">Εξεταστική περίοδος</th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" class="cb" id="check1" value="eam"/></th>
                            <th>Επικοινωνία Ανθρώπου Μηχανής</th>
                            <th>10</th>
                            <th>Ιανουαρίου</th>
                        </tr>
                        <tr class="drow2">
                            <th><input type="checkbox" class="cb" id="check2" value="ss"/></th>
                            <th>Σήματα & Συστήματα</th>
                            <th>6</th>
                            <th>Σεπτεμβρίου</th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" class="cb" id="check3" value="tn"/></th>
                            <th>Τεχνητή Νοημοσύνη Ι</th>
                            <th>3</th>
                            <th>Ιανουαρίου</th>
                        </tr>
                        <tr class="drow2">
                            <th><input type="checkbox" class="cb" id="check4" value="g1"/></th>
                            <th>Ανάλυση Ι</th>
                            <th>7</th>
                            <th>Ιουνίου</th>
                        </tr>
                    </table>
                </div>

                <div className="dilosi_rectangle1">
                    <div onClick={GetCheckboxValue2} className="dilosi_div">Επόμενο➜</div>
                </div>
                
            </div>
            <h4 class="error1" id="result"></h4>   */
            <Footer />
        </div>
    );
}