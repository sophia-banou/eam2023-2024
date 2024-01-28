import React, { useState } from 'react';
import { doc, setDoc, getDocs, collection } from 'firebase/firestore'
import { courses } from '../../Utils/Objects/objects';
import './index2.css'
import { Link } from "react-router-dom";

export default function Register({ db }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [am, setAM] = useState('');
    const [selectedOption, setSelectedOption] = useState("student");

    function onValueChange(event) {
        setSelectedOption(event.target.value);
    }

    // Handles the register functionality of the user
    async function handleRegister(e) {
        e.preventDefault()
        var message;
        var docUser;
        let role = selectedOption;

        if (email == "" || password == "" || name == "" || am == "") {
            message = "Δεν έχετε συμπληρώσει όλα τα πεδία.";
            let m = document.getElementById("w5");
            m.innerHTML = message;
            return;
        }

        const res = await getDocs(collection(db, "users"));
        var flag = false;
        res.forEach((user) => {

            if (user.data().email === email) {
                flag = true;
            }
        }
        );

        if (flag == true) {
            message = "Το email χρησιμοποιείται ήδη."
            let m = document.getElementById("w5");
            m.innerHTML = message;
            return;
        }


        if (role == "student") {
            docUser = {
                email: email,
                password: password,
                name: name,
                am: am,
                role: role,
                dob: "",
                marital_status: "",
                father_name: "",
                mother_name: "",
                pob: "",
                id: "",
                AMKA: "",
                semester: "",
                year1: "",
                date1: "",
                address: "",
                city: "",
                phone1: "",
                phone2: "",
                code: "",
                d_id: new Array,
                courses: new Array,
                aithseis: new Array,
                current_period: "Χειμερινό 2023-24"

            };
        } else if (role == "teacher") {
            docUser = {
                email: email,
                password: password,
                name: name,
                dob: "",
                marital_status: "",
                father_name: "",
                mother_name: "",
                pob: "",
                id: "",
                address: "",
                city: "",
                phone1: "",
                phone2: "",
                code: "",
                AMKA: "",
                role: role,
                grade_id: new Array,
                courses: new Array,
                current_period: "Χειμερινό 2023-24"

            };
        } 
    
        // This object represents the user's form that it will be saved in our database.



        try {
            // Create a Firebase doc that 'points' to our db and creates a collection "users" with primary key the email of the user


            // Then we use setDoc to push the 'user object' to the referenced user
            await setDoc(doc(db, "users", email), docUser);

            // At the same time we push all the courses at the db.
            // We create a 'courses' collection with primary key 'all_courses'


            // Redirect to login route
            window.location.href = '/login'

        } catch (e) {
            console.log(e);
        }

    }
    return (
        <div className='register'>
            <div class="login-avatar-div">
                <img src="avatar-icon.png" alt="Default Avatar"></img>
            </div>
            <form onSubmit={handleRegister} className='register-container'>
                <Link to="/login">
                    <img src="back-arrow.png" class="icon2"></img>
                </Link>
                <div class="login1-input-div">
                    <div className='register-row'>

                        &nbsp;&nbsp;&nbsp;
                        <input
                            type="email"
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='register-row'>

                        &nbsp;&nbsp;&nbsp;
                        <input
                            type="password"
                            placeholder='Κωδικός'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='register-row'>

                        &nbsp;&nbsp;&nbsp;
                        <input
                            placeholder='Ονοματεπώνυμο'
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='register-row'>

                        &nbsp;&nbsp;&nbsp;
                        <input
                            placeholder='Αριθμός Μητρώου'
                            type="AM"
                            value={am}
                            onChange={(e) => setAM(e.target.value)}
                        />
                    </div>
                    <div class="reg-log-span-div2">Επιλέξτε ιδιότητα:</div>
                    <div class="register-radio-div">
                        

                        <div>
                            <input type="radio" value="student" checked={selectedOption === "student"}  onChange={onValueChange}/>
                            <label class="reg-radio-text" for="student">Φοιτητής/ ρια</label>
                        </div>

                        <div>
                            <input type="radio" value="teacher" checked={selectedOption === "teacher"} onChange={onValueChange}/>
                            <label class="reg-radio-text" for="teacher">Διδάσκοντας/ ουσα</label>
                        </div>

                    </div>

                    <div class="w-div5">
                        <h id="w5" class="warning" ></h>
                    </div>
                    <div class="button-div8">
                        <div class="log-button-div1"><button type="submit"> ΕΓΓΡΑΦΗ </button> </div>
                    </div>

                </div>
            </form>
        </div>
    )
}