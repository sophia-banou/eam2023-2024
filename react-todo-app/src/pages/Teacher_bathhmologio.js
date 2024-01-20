import React from "react"
import { useState } from 'react';
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/teacher_menu.js"
import "./../css/Teacher_bathmologio.css";
import "./../css/App.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";

function Button(props) {
    return (
      <button className="bath_rectangle" onClick={props.onClick}>
        <div className="menu_div">Δημιουργία <br></br>Βαθμολογίου</div>
        <div><img  className="plus" alt="" src="/plus.png" /> </div>
      </button>
    );
}
  function Dropdown(props) {
    return (
      <div>
        {props.isVisible ? (
        <div className="menu_box">
            <div className="menu_div2">Μαζικά</div>
            <Link className="link_deco" to ="/teacher_create"><div className="menu_div2">Μεμονομένα</div></Link>
        </div>
        ) : null}
      </div>
    );
}
export default function StudentProfile() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body2"><Link to ="/teachers">Αρχική / </Link> <span>Βαθμολόγια</span></div>
            <div>
                <Button onClick={toggleVisibility} />
                <Dropdown isVisible={isVisible} />
            </div>
            <Footer />

        </div >

    )
}