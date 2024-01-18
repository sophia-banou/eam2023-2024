import React from "react";
import { useEffect, useState } from 'react';
import { db } from '../components/firebase.js';
import { doc, setDoc, updateDoc, arrayUnion, getDoc, getDocs, collection } from 'firebase/firestore'
import { Link } from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"
import firebase from 'firebase/compat/app';

export default function Student_dilwsh(){
    return (
        <div>
            <Nav2 />
            <Menu />
            <Footer />
        </div>
    );
};