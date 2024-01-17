import React from "react";
import {Link} from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/student_menu.css";

export default function Menu() {
    return (
        <div className="menu_body">
            <div className="menu-item">
            <Link to="/student_dilosi"><div className="divmenu">ΔΗΛΩΣΗ ΜΑΘΗΜΑΤΩΝ</div></Link>
            <div className="divmenu">ΒΑΘΜΟΛΟΓΙΕΣ</div>
            <div className="divmenu">ΜΑΘΗΜΑΤΑ</div>
            <div className="divmenu">ΑΙΤΗΣΗ ΠΙΣΤΟΠΟΙΗΤΙΚΟΥ</div>
            </div>
        </div>
    );
}