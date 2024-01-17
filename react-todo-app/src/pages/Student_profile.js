import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/student_menu.js"
import "./../css/student_profile.css";
import { logout } from '../Utils/Methods';

export default function StudentProfile() {
    return (
        <div>
            <Nav2 />
            <Menu />
            <div class="sp-div1">
                <div class="sp-div2">
                    <img src="profile-icon.png" class="sp-icon"></img>
                    <div class="sp-div3">
                        <div className="sp-text1">{localStorage.getItem("name")} </div>
                        <div className="sp-text2">{localStorage.getItem("am")} </div>
                    </div>
                    <button onClick={logout} className='logout'>Logout</button>
                </div>
               
            </div>
        </div>

    )
}