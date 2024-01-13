import React from "react"
import './../css/App.css';
import Nav1 from "./../components/Nav1.js"

export default function HomePage() {
  return (
    <header>
      <Nav1 />
      <div id="header-image-menu">
        <img src="header-image.png" alt="Image of the National and Kapodistrian University of Athens" />
        <h2 id="image-text">
          Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών
        </h2>
      </div>
    </header>
  );
}