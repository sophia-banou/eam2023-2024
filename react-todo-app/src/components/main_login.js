import React from "react";
import "./../css/main_login.css";
import SignInButton from "./SignInButton";

/**Προσπαθησα να φτιαξω το text διπλα απο την εικονα αλλα δεν μπορουσα με τιποτα να τα βαλω το ενα κατω απο το αλλο και
 * κεντραρισμενα με τιποτα και εκανα rage quit. Αν μπορεις δεν αν ειναι αν το φτιαξεις. Ολσο, εκανα το nav bar sticky για να 
 * μενει πανω πανω οταν κανεις scroll. */
/**εβαλα το κουμπι συνδεση γτ δεν μου φαινοταν πολυ εμφανες το οτι πρεπει αν πατησουν στο "ειμαι φοιτητης" αλλα μπορουμε να κανουμε
 * αυτο πιο πολυ σαν κουμπι και να το βγαλουμε αυτο
 */

export default function Login() {
  return (
    /*<div class="user-groupslogin">
      <div id="user-groups" >
        <ul>
          <li><a href='#'> <img class="user-group-icon" src="student-icon.png" ></img> </a> </li>

          <li> <div class="box1"> <ul> <li> <a href='#'> <p class="text-main">Είμαι Φοιτητής</p></a> </li>
            <li><span id="text-main2">Βρείτε πληροφορίες για τα μαθήματα σας.<br></br>
              Κάντε δήλωση μαθημάτων. <br></br>
              Δείτε και εκτυπώστε τη βαθμολογία σας. <br></br>
              Κάντε αίτηση για την έκδοση πιστοποιητικών.</span></li>
            <li> <a href='#'> <SignInButton /> </a></li></ul>

          </div>
          </li>
        </ul>
      </div>
    </div >*/
    <div className="body">
    <div className="rectangle-parent">
      
      <img class="user-group-icon" src="student-icon.png" ></img>
      <div className="div">Είμαι Φοιτητής
            <div className="div1">Βρείτε πληροφορίες για τα μαθήματα σας.<br></br>
              Κάντε δήλωση μαθημάτων. <br></br>
              Δείτε και εκτυπώστε τη βαθμολογία σας. <br></br>
              Κάντε αίτηση για την έκδοση πιστοποιητικών.
            </div>
            <ul>
              <li> <a href='#'> <SignInButton /> </a></li>
            </ul>
      </div>
      
    </div>
    </div>
  );
}

