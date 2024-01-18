import './index.css'
import React, { useState } from 'react';
import {doc, getDoc,setDoc } from 'firebase/firestore'
import { db } from '../firebase';
import {Link} from "react-router-dom";


export default function Login({db}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
      // Handles the login functionality of the user
    async function handleLogin (e){
        e.preventDefault()
        
        // We create a doc that 'points' at collection 'users' with primary key user's input email 
        const ref = doc(db, "users", email); 
        // Now "Bring me, from the collection 'users' the document with name/value 'email'"
        const res = await getDoc(ref);

        //If the user with email = "email" and password = "passowrd" exists in the db...
        if (res.exists() && res.data().email === email && res.data().password === password) {
            // Get the role and email...
            const user_role = res.data().role
            const user_email = res.data().email
            const user_name = res.data().name
            const user_am = res.data().am
            const user_dob = res.data().dob
            const user_pob = res.data().pob
            const user_semester = res.data().semester
            const user_marital_status = res.data().marital_status
            const user_father_name = res.data().father_name
            const user_mother_name = res.data().mother_name
            
            const user_id= res.data().id
            const user_AMKA = res.data().AMKA
            const user_date1 = res.data().date1
            const user_year1 = res.data().year1
            const user_address = res.data().address
            const user_city = res.data().city 
            const user_code = res.data().code 
            const user_phone1 = res.data().phone1 
            const user_phone2 = res.data().phone2 

            // Store the email and role as keys in your browser local storage
            localStorage.setItem('role', user_role)
            localStorage.setItem('email', user_email)
            localStorage.setItem('name', user_name)
            localStorage.setItem('am', user_am)
            localStorage.setItem('dob', user_dob)
            localStorage.setItem('pob', user_pob)
            localStorage.setItem('semester', user_semester)
            localStorage.setItem('marital_status', user_marital_status)
            localStorage.setItem('father_name', user_father_name)
            localStorage.setItem('mother_name', user_mother_name)
            localStorage.setItem('id', user_id)
            localStorage.setItem('AMKA', user_AMKA)
            localStorage.setItem('year1', user_year1)
            localStorage.setItem('date1', user_date1)
            localStorage.setItem('address', user_address)
            localStorage.setItem('city', user_city)
            localStorage.setItem('phone1', user_phone1) 
            localStorage.setItem('phone2', user_phone2)
            localStorage.setItem('code', user_code)

            // Go to page /courses
            if (user_role === 'student') {
                window.location.href = './students'
            }
            if (user_role === 'teacher'){
                window.location.href = './teachers'
            }
            console.log("Found User:", res.data());
        } else {
            console.log("No such document!");
        }
    }

    return(
        <div className='login'>
            <form onSubmit={handleLogin} className='login-container'>
                <Link to="/">
                <img src="back-arrow.png" class="icon2"></img>
                </Link>
                <h2>ΣΥΝΔΕΣΗ</h2>
                <div className='login-row'>
                    <div className='login-text'>Όνομα Χρήστη</div>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> 
                    <img class="login-icon1" src="user-icon.png" />
                </div>
                <div className='login-row'>
                    <div className='login-text'>Κωδικός</div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <img class="login-icon2" src="password-icon.png" />
                </div>
                <button id="sign-in-button2" type='submit'>Σύνδεση</button>
                <a href='/register'>Create new user</a>
                 
            </form>
        </div>
    )
}