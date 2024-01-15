import React from "react";
import {Link} from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/student_menu.css";

export default function Menu() {
    return (
        <div className="menu_body">
            <div className="menu-item">
            <div className="divmenu">ΒΑΘΜΟΛΟΓΙΑ</div>
            <div className="divmenu">ΜΑΘΗΜΑΤΑ</div>
            </div>
        </div>
    );
}