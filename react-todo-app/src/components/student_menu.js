import React from "react";
import {Link} from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/student_menu.css";

export default function Menu() {
    return (
        <div className="menu_body">
            <div className="menu-item">
            <Link class="link-menu" to="/student_dilosi"><div className="divmenu">ΔΗΛΩΣΗ ΜΑΘΗΜΑΤΩΝ</div></Link>
            <Link class="link-menu" to="/student_bathmologies"><div className="divmenu">ΒΑΘΜΟΛΟΓΙΕΣ</div></Link>
            <Link class="link-menu" to="/student_mathimata"><div className="divmenu">ΜΑΘΗΜΑΤΑ</div></Link>
            <Link class="link-menu" to="/student_aitisi"><div className="divmenu">ΑΙΤΗΣΗ ΠΙΣΤΟΠΟΙΗΤΙΚΟΥ</div></Link>
            </div>
        </div>
    );
}