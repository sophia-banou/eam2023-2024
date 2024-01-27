import React from "react"
import './../css/HomePage.css';
import Nav1 from "./../components/Nav1.js"
import Footer from "./../components/footer.js"
import Login from "./../components/main_login.js"

export default function HomePage() {
  return (
    <div>
      <Nav1 />
      <div id="header-image-menu">
        <img src="header-image.png" alt="National and Kapodistrian University of Athens" />
        <div class="header-text">
          <div class="header-div"> 
            <h2 class="image-text"> ΓΡΑΜΜΑΤΕΙΕΣ ΠΑΝΕΠΙΣΤΗΜΙΟΥ ΑΘΗΝΩΝ </h2>
            <span class="image-text2">Εισάγετε τα στοιχεία σας για να αποκτήσετε <br></br> πρόσβαση στις υπηρεσείες της πλατφόρμας.</span>
          </div>
          <div class="button-div1"><button class="header-button"> ΣΥΝΔΕΣΗ</button></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}