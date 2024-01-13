import React from "react"
import './../css/App.css';
import "./../components/Nav1.js"

export default function HomePage() {
    return (
        <header>
    <div id="header">
      <div id="logo"> 
        <img src ="logo.jpeg" alt="Logo" />
      </div>
      
    <nav id="menu">
      <ul>
        <li class= "active">
          <a href='#'> Αρχικη</a>
        </li>
        <li>
          <a href='#'> Συνδεση</a>
        </li>
        <li>
          <a href='#'> Βοηθεια</a>
        </li>
      </ul>
    </nav>
    </div>
    <div id="header-image-menu">
      <img src="header-image.png" alt="Image of the National and Kapodistrian University of Athens" />
      <h2 id="image-text">
           Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών
      </h2>
    </div>
  </header>
    );
}