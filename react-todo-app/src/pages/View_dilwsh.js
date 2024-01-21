import React from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/student_menu.js"
import { useState, useEffect } from 'react';
import { db } from '../components/firebase.js';
import "./../css/student_profile.css";
import "./../css/Student_dilosi.css";
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'

export default function View_dilwsh(){

    async function getCourses(){

        
        const res1 = await getDoc(doc(db,"users",localStorage.getItem("email")));
        
       
    }
    
    useEffect(() => {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/'
        }
    }, [])

    return(

        <div>
            
        <Nav2 />
        <Menu />

        <Link to="/istoriko">
                <img src="back-arrow.png" class="arrow-icon2"></img>
        </Link>

        

        <Footer />
    </div>

    );

}