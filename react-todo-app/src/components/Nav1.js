import React from "react";
import "./../css/App.css";

export default function Nav1() {
    return (
        <header>
            <div id="header">
                <div id="logo">
                    <img src="logo.jpeg" alt="Logo" />
                </div>

                <nav id="menu">
                    <ul>
                        <li class="active">
                            <a href='#'> Αρχικη</a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D'> Συνδεση</a>
                        </li>
                        <li>
                            <a href='#'> Βοηθεια</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}