import React from "react";
import {Link} from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/student_menu.css";

export default function Menu() {
    return (
        <div className="menu_body">
            <div className="menu-item">
            <Link class="link-menu" to="/teacher_bathmologia"><div className="divmenu">ΒΑΘΜΟΛΟΓΙΑ</div></Link>
            <Link class="link-menu" to="/teacher_mathimata"><div className="divmenu">ΜΑΘΗΜΑΤΑ</div></Link>
            </div>
        </div>
    );
}