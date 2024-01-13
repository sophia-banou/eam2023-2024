import React from "react"
import './../css/App.css';
import Nav1 from "./../components/Nav1.js"
import Footer from "./../components/footer.js"
import Login from "./../components/main_login.js"

export default function HomePage() {
  return (
    <div>
      <Nav1 />
      <div id="header-image-menu">
        <img src="header-image.png" alt="National and Kapodistrian University of Athens" />
        <h2 id="image-text">
          Γραμματείες Πανεπιστημίου<br></br> Αθηνών
        </h2>
      </div>
      <Login  />
      <Footer />
    </div>
  );
}