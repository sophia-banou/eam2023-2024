import React from "react";
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import {Link} from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"


export default function Student_dilosi() {
    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };
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
                            <th ><input value={1} type="checkbox" onChange={handleCheck} /></th>
                            <th>Μάθημα1</th>
                            <th>Α</th>
                            <th>8ο</th>
                            <th>Ελεύθερο</th>
                        </tr>
                        <tr class="drow2">
                            <th><input value={1} type="checkbox" onChange={handleCheck} /></th>
                            <th>Μάθημα2</th>
                            <th>Α</th>
                            <th>8ο</th>
                            <th>Ελεύθερο</th>
                        </tr>
                        <tr>
                            <th><input value={1} type="checkbox" onChange={handleCheck} /></th>
                            <th>Μάθημα3</th>
                            <th>Α</th>
                            <th>8ο</th>
                            <th>Ελεύθερο</th>
                        </tr>
                        <tr class="drow2">
                            <th><input value={1} type="checkbox" onChange={handleCheck} /></th>
                            <th>Μάθημα4</th>
                            <th>Α</th>
                            <th>8ο</th>
                            <th>Ελεύθερο</th>
                        </tr>
                    </table>
                </div>
                <Link to="/aitisi_teachers">
                <div className="dilosi_rectangle1">
                    <div className="dilosi_div">Προσωρινή Αποθήκευση</div>
                </div>
                </Link>
            </div>
            
            <Footer />
        </div>
    );
}