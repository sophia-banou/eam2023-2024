import logo from './logo.jpeg';
import headerImage from './header-image.png';
import './App.css';

console.log(logo);
console.log(headerImage)


function App() {
  
  return (
    <header>
    <div id="header">
      <div id="logo"> 
        <img src ={logo} alt="Logo" />
      </div>
      
    <nav id="menu">
      <ul>
        <li class="active">
          <a href='#'> Συνδεση</a>
        </li>
        <li>
          <a href='#'> Βοηθεια</a>
        </li>
      </ul>
    </nav>
    </div>
    <div id="header-image-menu">
      <img src={headerImage} alt="Image of the National and Kapodistrian University of Athens" />
      <h2 id="image-text">
           Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών
      </h2>
    </div>
  </header>
  );
}

export default App;
