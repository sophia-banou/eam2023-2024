import React from "react";
import { useEffect, useState } from 'react';
import { db } from '../components/firebase.js';
import { doc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore'
import {Link} from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Student_dilosi() {

    //const ref = doc(db, "courses", "all_courses");
    //const res = getDoc(ref);

    //const user_role = res.data().name


    useEffect(()=> {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    },[])

    return (
        <div>
            <Nav2 />
            <Menu />
            <div className='courses'>
                {/* <textarea rows={5} cols={50} style={{'margin': '10px'}} value={courses}/ >    */}
            </div>
            <Footer />
        </div>
    );
}