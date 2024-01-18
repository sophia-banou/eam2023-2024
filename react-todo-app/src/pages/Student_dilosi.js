import React from "react";
import { useEffect } from 'react';
import { db } from '../components/firebase.js';
import {Link} from "react-router-dom";
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
            <div class="d-div1">  
                <div class="div-table">
                    <table class="d-table2">
                        <tr>
                            <th class="dcell"><input type="checkbox" disabled/></th>
                            <th class="dcell">Όνομα μαθήματος</th>
                            <th class="dcell">Κατεύθυνση</th>
                            <th class="dcell">Εξάμηνο</th>
                            <th class="dcell">Κατηγορία</th>
                        </tr>
                        <tr>
                            <th ><input type="checkbox" /></th>
                            <th>Μάθημα</th>
                            <th>Α</th>
                            <th>8ο</th>
                            <th>Ελεύθερο</th>
                        </tr>
                        <tr class="drow2">
                            <th><input type="checkbox" /></th>
                            <th>Μάθημα</th>
                            <th>Α</th>
                            <th>8ο</th>
                            <th>Ελεύθερο</th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Μάθημα</th>
                            <th>Α</th>
                            <th>8ο</th>
                            <th>Ελεύθερο</th>
                        </tr>
                        <tr class="drow2">
                            <th><input type="checkbox" /></th>
                            <th>Μάθημα</th>
                            <th>Α</th>
                            <th>8ο</th>
                            <th>Ελεύθερο</th>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}