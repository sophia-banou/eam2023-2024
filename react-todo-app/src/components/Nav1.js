import React from "react";
import "./../css/App.css";
import Button from "./../components/Button1.js";

export default function Nav1() {
    return (
        <header>
            <div id="header">
                <div id="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <nav id="menu">
                    <ul>
                        <li> <a href='#'>   <Button /></a>
                         
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}