import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/student_menu.js"
import "./../css/student_profile.css";
import { logout, btnTab1, btnTab2, btnTab3 } from '../Utils/Methods/index.js';
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";

export default function Edit_profile() {
    return (
        <div>
            <Nav2 />
            <Menu />
            <div class="icon-div">
                    <Link to="/student_dilosi">
                        <img src="back-arrow.png" class="arrow-icon"></img>
                    </Link>
            </div>
            <div class="sp">    
                <div class="sp-div">
                </div>
            
                <div class="sp-div1">
                    <div class="sp-div2">
                        <img src="profile-icon.png" class="sp-icon"></img>
                        <div class="sp-div3">
                            <div className="sp-text1">{localStorage.getItem("name")} </div>
                            <div className="sp-text2">{localStorage.getItem("am")} </div>
                        </div>

                    </div>
                    <div class="div-table2">

                    </div>
                </div>
            </div>

            <Footer />

        </div>

    )
}