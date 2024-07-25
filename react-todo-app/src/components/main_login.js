import React from "react";
import {Link} from "react-router-dom";
import "./../css/main_login.css";
import SignInButton from "./SignInButton";


export default function Login() {
  return (
   
    <div className="login_body">
    <div className="login_rectangle">
      <img class="user-group-icon" src="student-icon.png" ></img>
      <div className="login_div"> <span class="login-head">Είμαι Φοιτητής </span>
            <div className="login_div1">Βρείτε πληροφορίες για τα μαθήματα σας.<br></br>
              Κάντε δήλωση μαθημάτων. <br></br>
              Δείτε και εκτυπώστε τη βαθμολογία σας. <br></br>
              Κάντε αίτηση για την έκδοση πιστοποιητικών.
            </div>
            <Link to="/students"> <SignInButton /> </Link>
      </div>
      
    </div>
      <div className="login_rectangle">
      <img class="user-group-icon" src="teacher-icon.png" ></img>
      <div className="login_div"> <span class="login-head">Είμαι Καθηγητής </span>
            <div className="login_div1">
              Παρακολουθήστε παλιά σας βαθμολόγια <br></br> και δημιουργήστε καινούργια. <br></br>
              Δείτε πληροφορίες για τα μαθήματα που διδάσκετε. <br></br>
        
            </div>
            <Link to="/teachers"> <SignInButton /> </Link>
      </div>
      
    </div>
    </div>
  );
}

