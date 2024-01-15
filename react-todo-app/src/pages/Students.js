import React from "react"
import './../css/HomePage.css';
import Nav1 from "./../components/Nav1.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function HomePage() {
  return (
    <div>
      <Nav1 />
      <Menu />
      <div id="header-image-menu-students">
        <img src="student_banner.jpg" alt="National and Kapodistrian University of Athens" />
      </div>
      <Footer />
    </div>
  );
}