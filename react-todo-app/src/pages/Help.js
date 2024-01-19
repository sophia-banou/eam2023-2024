import React from "react"
import { Link } from "react-router-dom";
import './../css/App.css';
import './../css/Help.css';
import Nav1 from "./../components/Nav1.js"
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"

function link(){
    if (localStorage.getItem('role') === null) {
        return (<Link to="/">Αρχική</Link>);
      } else {
        if (localStorage.getItem('role') === "student")
            return(<Link to="/students">Αρχική</Link>);
        if (localStorage.getItem('role') === "teacher")
            return(<Link to="/teacher">Αρχική</Link>);
    }  
}

export default function Help() {
    if (localStorage.getItem('role') === null) {
        var nav = <Nav1 />;
      } else {
        var nav = <Nav2 />;
    }   
    return (
        <div>
            <div> {nav} </div>
            <Link to="/">Αρχική</Link>
            <div>{link()}</div>
            <div className="help_body">
                <div className="help_div2">ΒΟΗΘΕΙΑ</div>
                <div className="help_div2">{link()}</div>

                <Link to="/help_students">
                    <div class="help_rectangle1">
                        <div className="help_div">Φοιτητές /τριες</div>
                        <div><img id="help-icon" src="student_icon.png" alt="Student"></img></div>
                    </div>
                </Link>



                <br></br>
                <Link to="/help_teachers">
                    <div className="help_rectangle2">
                        <div className="help_div">Διδάσκοντες /ουσες</div>
                        <div><img id="help-icon" src="teacher_icon.png" alt="Student"></img></div>
                    </div>
                </Link>
            </div>
            <Footer />
        </div>
    );
}