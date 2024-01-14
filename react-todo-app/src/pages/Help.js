import React from "react"
import {Link} from "react-router-dom";
import './../css/App.css';
import './../css/Help.css';
import Nav1 from "./../components/Nav1.js"
import Footer from "./../components/footer.js"

export default function Help() {
  return (
    <div>
        <Nav1 />
        <div className="help_body">
            <div className="help_div2">Βοήθεια</div>
            <Link to="/help_students">
                <div className="help_rectangle1">
                    <img className="himage2" alt="" src="/studentshelp.jpg" /> 
                    <div className="help_div">Φοιτητές/τριες</div>
                </div>
            </Link>  
            <br></br>
            <Link to="/help_students">
                <div className="help_rectangle2">
                    <img className="himage2" alt="" src="/studentshelp.jpg" /> 
                    <div className="help_div">Διδάσκοντες/ουσες</div>
                </div>
            </Link>
        </div>
        <Footer />
    </div>
  );
}