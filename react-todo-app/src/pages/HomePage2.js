import React from "react"
import { useEffect } from 'react';
import './../css/HomePage.css';
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Login from "./../components/main_login.js"

export default function HomePage() {

  useEffect(()=> {
    if (localStorage.getItem('role') === null) {
        window.location.href = '/'
    }
  },[])

  return (
    <div>
      <Nav2 />
      <div id="header-image-menu">
        <img src="header-image.png" alt="National and Kapodistrian University of Athens" />
        <h2 id="image-text">
          Γραμματείες Πανεπιστημίου<br></br> Αθηνών
        </h2>
      </div>
      <Footer />
    </div>
  );
}