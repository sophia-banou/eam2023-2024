import React from "react"
import { useState } from 'react';
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/teacher_menu.js"
import "./../css/Teacher_bathmologio.css";
import "./../css/App.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";

function Button2(props) {
    return (
      <button className="bath_rectangle" onClick={props.onClick}>
        <div className="menu_div">Όνομα μαθήματος ▽ </div>
      </button>
    );
}
  function Dropdown2(props) {
    return (
      <div>
        {props.isVisible ? (
        <div className="menu_box">
            <div className="menu_div2">Μάθημα 1</div>
            <div className="menu_div2">Μάθημα 2</div>
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
            <div className="breadcrumb_body2"><Link to ="/teachers">Αρχική / </Link> <Link to ="/teacher_bathmologia">Βαθμολόγια / </Link><span>Δημιουργία Βαθμολογίου</span></div>
            <div>
                <Button2 onClick={toggleVisibility} />
                <Dropdown2 isVisible={isVisible} />
            </div>
            <Footer />

        </div >

    )
}