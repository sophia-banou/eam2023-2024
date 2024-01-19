import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/teacher_menu.js"
import "./../css/student_profile.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";

export default function StudentProfile() {

    return (
        <div>
            <Nav2 />
            <Menu />
            <Footer />

        </div >

    )
}