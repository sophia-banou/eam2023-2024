import React from "react";
import "./../css/main_login.css";

export default function Login() {
  return (
    <div className="user-groupslogin">
      <div className="div1">
        <ul className="ul">
          <li className="li">Παρακολουθήστε/ δημιουργήστε βαθμολόγια</li>
          <li>Βρείτε πληροφορίες για τα μαθήματα που διδάσκετε</li>
        </ul>
      </div>
      <div className="div2">
        <ul className="ul">
          <li className="li">Βρείτε πληροφορίες για τα μαθήματα</li>
          <li className="li">Κάνετε δήλωση μαθημάτων</li>
          <li className="li">Εκτυπώστε τη βαθμολογία σας</li>
          <li>Κάνετε αίτηση για την έκδοση πιστοποιητικών</li>
        </ul>
      </div>
      <b className="b1">Διδάσκοντες</b>
      <b className="b2">Φοιτητές</b>
      <div class="user-group-images">
        <img
          className="user-group-icon"
          alt="Teacher"
          src="/teacher.png"
        />
        <img
          className="user-group-icon"
          alt="Student"
          src="./students-image.png"
        />
      </div>
    </div>
  );
}