import React from "react"
import './../css/HomePage.css';
import './../css/Teachers.css';
import Nav1 from "./../components/Nav1.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/teacher_menu.js"

export default function Teachers() {
  return (
    <div>
      <Nav1 />
      <Menu />
      <div id="header-image-menu">
        <img src="student_banner.png" alt="National and Kapodistrian University of Athens" />
      </div>
      <div className="teachers_body">
            <div className="teacher_box">
            <div className="teacher_div1">ΒΑΘΜΟΛΟΓΙΑ</div>
            <div className="teacher_div2">ΜΑΘΗΜΑΤΑ</div>
            <div className="teacher_div3">ΜΑΘΗΜΑΤΑ</div>
            <div className="teacher_div4">ΜΑΘΗΜΑΤΑ</div>
            </div>
        </div>
      <Footer />
    </div>
  );
}