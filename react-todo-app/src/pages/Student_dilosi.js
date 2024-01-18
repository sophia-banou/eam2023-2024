import React from "react";
import { useEffect, useState } from 'react';
import { db } from '../components/firebase.js';
import { doc, setDoc, updateDoc, arrayUnion, getDoc, getDocs, collection } from 'firebase/firestore'
import {Link} from "react-router-dom";
import "./../css/HomePage.css";
import "./../css/Student_dilosi.css";
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Student_dilosi() {
    const [courses, setCourses] = useState();
    async function getAllCoursesFunc (e){
        e.preventDefault()
        
        //"Bring me, from the collection 'courses' the document with name/value 'all_courses'"
        const ref = doc(db, "courses", "all_courses"); 
        const res = await getDoc(ref);

        if (res.exists()) {
            // This part just make your response look more like a JSON and less like a text
            var ugly = JSON.stringify(res.data());
            var obj = JSON.parse(ugly);
            var pretty = JSON.stringify(obj, undefined, 4);
            // Save response to a string state
            setCourses(pretty)
        } else {
            console.log("No such document!");
        }
    }
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
            {getAllCoursesFunc}
            <textarea rows={5} cols={50} style={{'margin': '10px'}} value={courses}/ >
            <Footer />
        </div>
    );
}