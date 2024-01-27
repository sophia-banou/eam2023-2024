import React, { useState } from 'react';
import { doc, setDoc , getDocs, collection} from 'firebase/firestore'
import { courses } from '../../Utils/Objects/objects';
import './index2.css'
import { Link } from "react-router-dom";

export default function Register({db}){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [AM, setAM] = useState('');
  const [role, setrole] = useState('');    

  // Handles the register functionality of the user
  async function handleRegister(e){
    e.preventDefault()
    var message;
    var docUser;

    if (email =="" || password =="" || name =="" || role == "" || AM ==""){
        message = "Δεν έχετε συμπληρώσει όλα τα πεδία.";
        let m = document.getElementById("w5");
        m.innerHTML = message;
        return;
    }

    const res = await getDocs(collection(db,"users"));
    var flag = false;
    res.forEach( (user) => {
        
        if (user.data().email === email) {
            flag=true;
    }}
    );

    if (flag == true) {
        message = "Το email χρησιμοποιείται ήδη."
        let m = document.getElementById("w5");
        m.innerHTML = message;
        return;
    }


    if(role == "student"){
        docUser = {
            email: email,
            password: password,
            name: name,
            AM: AM,
            role: role,
            d_id: new Array,
            courses: new Array,
            aithseis: new Array,
            current_period: "Χειμερινό 2023-24"
           
        };
    } else if(role == "teacher") {
        docUser = {
            email: email,
            password: password,
            name: name,
            AM: AM,
            role: role,
            grade_id: new Array,
            courses: new Array,
            current_period: "Χειμερινό 2023-24"
           
        };
    } else {
        message = "Έχετε εισάγει λάθος ρόλο.";
        let m = document.getElementById("w5");
        m.innerHTML = message;
        return;
    }
    // This object represents the user's form that it will be saved in our database.
   
   

    try{
       // Create a Firebase doc that 'points' to our db and creates a collection "users" with primary key the email of the user
      
      
      // Then we use setDoc to push the 'user object' to the referenced user
      await setDoc(doc(db, "users", email), docUser);

      // At the same time we push all the courses at the db.
      // We create a 'courses' collection with primary key 'all_courses'
     

      // Redirect to login route
      window.location.href = '/login'

    }catch(e){
      console.log(e);
    }
    
  }
    return(
      <div className='register'>
        <form onSubmit={handleRegister} className='register-container'>
                <Link to="/login">
                    <img src="back-arrow.png" class="icon2"></img>
                </Link>
            <h2>Δημιουργία Νέου Λογαριασμού</h2>
            <div className='register-row'>
                <label>Email:</label>
                &nbsp;&nbsp;&nbsp;
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='register-row'>
                <label>Κωδικός:</label>
                &nbsp;&nbsp;&nbsp;
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='register-row'>
                <label>Όνομα:</label>
                &nbsp;&nbsp;&nbsp;
                <input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='register-row'>
                <label>AM:</label>
                &nbsp;&nbsp;&nbsp;
                <input
                    type="AM"
                    value={AM}
                    onChange={(e) => setAM(e.target.value)}
                />
            </div>
            <div className='register-row'>
                <label>Ρόλος:</label>
                &nbsp;&nbsp;&nbsp;
                <input
                    type="role"
                    value={role}
                    onChange={(e) => setrole(e.target.value)}
                />
            </div>

            <div class="button-div9">
                <button type='submit'>Εγγραφή</button>
            </div>
            <div class="w-div">
                    <h id="w5" class="warning" ></h>
            </div>
        </form>
      </div>
    )
}