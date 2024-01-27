import React from "react"
import './../css/HomePage.css';
import Nav1 from "./../components/Nav1.js"
import Footer from "./../components/footer.js"
import Login from "./../components/main_login.js"
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Nav1 />
      <div id="header-image-menu">
        <img src="header-image.png" alt="National and Kapodistrian University of Athens" />
        <div class="header-text">
          <div class="header-div">
            <h2 class="image-text"> ΓΡΑΜΜΑΤΕΙΕΣ ΠΑΝΕΠΙΣΤΗΜΙΟΥ ΑΘΗΝΩΝ </h2>
            <span class="image-text2">Εισάγετε τα στοιχεία σας για να αποκτήσετε <br></br> πρόσβαση στις υπηρεσίες της πλατφόρμας.</span>
          </div>
          <Link to='/login'><div class="button-div1"><button class="header-button"> ΣΥΝΔΕΣΗ</button></div></Link>
        </div>
      </div>
      <div class="info-div1">
        <div class="info-div3">

          <div class="info-box1">
            <div class="info-img-div">
              <img src="st-icon.png" class="info-box-img"></img>
            </div>
            <div class="info-b-text">
                <div>
                    <span class="info-span1"> Φοιτητές</span> <br></br>
                    <span class="info-span2"> Δείτε τις βαθμολογίες σας, δείτε τις προθεσμίες των δηλώσεων και δηλώστε μαθήματα, δημιουργήστε αιτήσεις για πιστοποιητικά</span>
                </div>
            </div>
          </div>
          <div class="info-box1">
            <div class="info-img-div">
              <img src="pr-icon.png" class="info-box-img"></img>
            </div>
            <div class="info-b-text">
                <div>
                    <span class="info-span1"> Διδάσκοντες</span> <br></br>
                    <span class="info-span2"> Δείτε τις βαθμολόγια σας και δημιουργήστε καινούργια, δείτε πληροφορίες για τα μαθήματα που διδάσκετε</span>
                </div>
            </div>  
           
          </div>

        </div>

      </div>
      <div class="info-div2">

      </div>
      <Footer />
    </div>
  );
}