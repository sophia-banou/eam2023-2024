import './index.css'
import React, { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";

export default function Login({ db }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    // Handles the login functionality of the user
    async function handleLogin(e) {
        e.preventDefault()
        var message;
        if (email == "") {
            message = "Δεν έχετε εισάγει e-mail.";
            let m = document.getElementById("w1");
            m.innerHTML = message;
            return;
        }

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

            const user_id = res.data().id
            const user_AMKA = res.data().AMKA
            const user_date1 = res.data().date1
            const user_year1 = res.data().year1
            const user_address = res.data().address
            const user_city = res.data().city
            const user_code = res.data().code
            const user_phone1 = res.data().phone1
            const user_phone2 = res.data().phone2
            const user_dilosh_id = res.data().dilosh_id

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
            localStorage.setItem('dilosh_id', user_dilosh_id)

            // Go to page /courses
            if (user_role === 'student') {
                window.location.href = './students'
            }
            if (user_role === 'teacher') {
                window.location.href = './teachers'
            }
            console.log("Found User:", res.data());
        } else {
            message = "Το e-mail ή ο κωδικός που εισάγατε είναι λάθος.";
            let m = document.getElementById("w1");
            m.innerHTML = message;

            console.log("No such document!");
        }
    }

    return (

        <div class='login'>
            <div class="login-avatar-div">
                <img src="avatar-icon.png" alt="Default Avatar"></img>
            </div>
            <form onSubmit={handleLogin} className='login-container'>
                <Link to="/">
                    <img src="back-arrow.png" class="icon2"></img>
                </Link>
                <div class="login1-input-div">
                    <div className='login-row'>

                        <input
                            placeholder='Email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <img src="email-icon.png" class="login-form-icon" alt="Email"></img>



                    </div>
                    <div className='login-row'>

                        <input
                            placeholder='Κωδικός'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img src="lock-icon.png" class="login-form-icon" alt="Lock"></img>

                    </div>
                    <div class="w-div">
                        <h id="w1" class="warning" ></h>
                    </div>
                    <div class="button-div8">
                        <div class="log-button-div1"><button type="submit"> ΣΥΝΔΕΣΗ</button> </div>
                    </div>
                </div>
                <div class="register-log-div">
                    <div class="reg-log-span-div">
                        Δεν έχετε λογαριασμό;
                    </div>
                    <div>
                        <Link class="link" to="/register"><div class="reg-button-div1"><button> ΕΓΓΡΑΦΗ</button> </div></Link>

                    </div>
                </div>

            </form>

        </div>
    )
}