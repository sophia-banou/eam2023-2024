import logo from './logo.jpeg';
import headerImage from './header-image.png';
import './App.css';

console.log(logo);
console.log(headerImage)


// function App() {
  
//   return (
//     <header>
//     <div id="header">
//       <div id="logo"> 
//         <img src ={logo} alt="Logo" />
//       </div>
      
//     <nav id="menu">
//       <ul>
//         <li class="active">
//           <a href='#'> Συνδεση</a>
//         </li>
//         <li>
//           <a href='#'> Βοηθεια</a>
//         </li>
//       </ul>
//     </nav>
//     </div>
//     <div id="header-image-menu">
//       <img src={headerImage} alt="Image of the National and Kapodistrian University of Athens" />
//       <h2 id="image-text">
//            Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών
//       </h2>
//     </div>
//   </header>
//   );
// }

// export default App;

const App = () => {
  return (
    <div className="home-page">
      <div className="footer">
        <div className="t-y">
          Το έργο «Προηγμένες Tηλεματικές Yπηρεσίες στο Πανεπιστήμιο Αθηνών
          ΑΘΗΝΑ ΝΕΤ- ΙΙ» έχει ενταχθεί στο Ε.Π. Κοινωνία της Πληροφορίας,
          συγχρηματοδοτείται κατά 75% από το Ευρωπαϊκό Κοινωνικό Ταμείο (EKT)
          και κατά 25% από το Ελληνικό Δημόσιο.
        </div>
        <div className="copyright-container">
          <span className="copyright-container1">
            <p className="copyright">
              <span className="span">©</span>
              <span>
                {" "}
                Copyright, Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών 2023
              </span>
            </p>
            <p className="copyright">All rights reserved.</p>
          </span>
        </div>
        <img className="image-6-icon" alt="" src="/image-6@2x.png" />
        <img className="image-7-icon" alt="" src="/image-6@2x.png" />
        <img className="image-8-icon" alt="" src="/image-6@2x.png" />
      </div>
      <div className="user-groupslogin">
        <div className="div">
          <ul className="ul">
            <li className="li">Δείτε τις πληροφορίες φοιτητών</li>
            <li className="li">Ορίστε προθεσμίες δηλώσεων</li>
            <li className="li">Συμπληρώστε έντυπα</li>
            <li>Δείτε αιτήσεις, μηνύματα.</li>
          </ul>
        </div>
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
        <b className="b">Γραμματεία</b>
        <b className="b1">Διδάσκοντες</b>
        <b className="b2">Φοιτητές</b>
        <img
          className="image-placeholder3-icon"
          alt=""
          src="/image-placeholder3@2x.png"
        />
        <img
          className="image-placeholder2-icon"
          alt=""
          src="/image-placeholder3@2x.png"
        />
        <img
          className="image-placeholder1-icon"
          alt=""
          src="/image-placeholder3@2x.png"
        />
      </div>
      <img className="banner-icon" alt="" src="/banner@2x.png" />
      <div className="header">
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="gr">GR</div>
        </div>
        <div className="rectangle-group">
          <div className="frame-child" />
          <div className="gr">EN</div>
        </div>
        <div className="button">
          <div className="button-child" />
          <b className="b3">Βοήθεια</b>
        </div>
      </div>
    </div>
  );
};

export default App;