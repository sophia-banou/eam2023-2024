import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/student_menu.js"
import "./../css/student_profile.css";
import "./../css/Student_dilosi.css";
import { logout, btnTab1, btnTab2, btnTab3 } from '../Utils/Methods/index.js';
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";
import { generateTable2 } from "../Utils/Methods/index.js";

export default function StudentProfile() {

    return (
        <div onLoad={generateTable2}>
            <Nav2 />
            <Menu />
            <div class="table1">
                <h>Δηλώσεις</h>
            </div>
        
            <div id="dyn1" class="div-table" ></div>

            <Footer />
        </div>
    );
}
