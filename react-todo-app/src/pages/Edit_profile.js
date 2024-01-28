import React, { useState, useEffect } from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/student_menu.js"
import "./../css/student_profile.css";
import { logout, btnTab1, btnTab2, btnTab3 } from '../Utils/Methods/index.js';
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";
import {doc, getDoc,updateDoc } from 'firebase/firestore'
import { db } from '../components/firebase.js';

export default function Edit_profile() {

    useEffect(() => {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/login2'
        }
    }, [])


    const [mStatus, setMStatus] = useState('');
    const [pobStatus, setPobStatus] = useState('');
    const [idStatus, setIdStatus] = useState('');
    const [amkaStatus, setAmkaStatus] = useState('');
    const [addressStatus, setAddressStatus] = useState('');
    const [cityStatus, setCityStatus] = useState('');
    const [codeStatus, setCodeStatus] = useState('');
    const [phone1Status, setPhone1Status] = useState('');
    const [phone2Status, setPhone2Status] = useState('');

    async function handleEdit(e) {
        e.preventDefault()

        // We create a doc that 'points' at collection 'users' with primary key user's input email 
        const ref = doc(db, "users", localStorage.getItem("email"));
        // Now "Bring me, from the collection 'users' the document with name/value 'email'"
        
        var data = {
            marital_status: mStatus,
            pob: pobStatus,
            id: idStatus,
            AMKA: amkaStatus,
            address: addressStatus,
            city: cityStatus,
            code: codeStatus,
            phone1: phone1Status,
            phone2: phone2Status,
        }
        
        if (mStatus == "") {
            data.marital_status = localStorage.getItem("marital_status")
        }
        if (pobStatus == "") {
            data.pob = localStorage.getItem("pob")
        }
        if (idStatus == "") {
            data.id = localStorage.getItem("id")
        }
        if (amkaStatus == "") {
            data.AMKA = localStorage.getItem("AMKA")
        }
        if (addressStatus == "") {
            data.address = localStorage.getItem("address")
        }
        if (cityStatus == "") {
            data.city = localStorage.getItem("city")
        }
        if (codeStatus == "") {
            data.code = localStorage.getItem("code")
        }
        if (phone1Status == "") {
            data.phone1 = localStorage.getItem("phone1")
        }
        if (phone2Status == "") {
            data.phone2 = localStorage.getItem("phone2")
        }

        localStorage.setItem('pob', data.pob)
        localStorage.setItem('marital_status', data.marital_status)
        localStorage.setItem('id', data.id)
        localStorage.setItem('AMKA', data.AMKA)
        localStorage.setItem('address', data.address)
        localStorage.setItem('city', data.city)
        localStorage.setItem('phone1', data.phone1) 
        localStorage.setItem('phone2', data.phone2)
        localStorage.setItem('code', data.code)

        updateDoc(ref,data);
        window.location.href = './student_profile'
    }

    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to="/students">Αρχική / </Link><Link to="/student_profile">Προφίλ / </Link><span>Επεξεργασία Προφίλ</span></div>
            <div class="icon-div">
                <Link to="/student_profile">
                    <img src="back-arrow.png" class="arrow-icon"></img>
                </Link>
            </div>
            <div class="sp">
                <div class="sp-div">
                </div>

                <div class="sp-div1">
                    <div class="sp-div2">
                        <img src="profile-icon.png" class="sp-icon"></img>
                        <div class="sp-div3">
                            <div className="sp-text1">{localStorage.getItem("name")} </div>
                            <div className="sp-text2">{localStorage.getItem("am")} </div>
                        </div>

                    </div>
                    <div class="div-table">
                        <table class="sp-table1">
                            <tr>
                                <th id="pb1" onClick={btnTab1} class="active">Προσωπικά Στοιχεία</th>
                                <th id="pb2" onClick={btnTab2} class="cell">Σχετικά με τις Σπουδές</th>
                                <th id="pb3" onClick={btnTab3} class="cell">Πληροφορίες Επικοινωνίας</th>

                            </tr>
                        </table>
                        <form onSubmit={handleEdit}>
                        <table id="table1" class="sp-table2">
                            <tr>
                                <th>Ονοματεπώνυμο</th>
                                <td>{localStorage.getItem("name")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Ημερομηνία Γέννησης</th>
                                <td>{localStorage.getItem("dob")}</td>
                            </tr>
                            <tr>
                                <th>Αριθμός Μητρώου</th>
                                <td>{localStorage.getItem("am")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Οικογενειακή Κατάσταση</th>
                                <td><input value={mStatus} onChange={(e) => setMStatus(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <th>Όνομα Πατέρα</th>
                                <td>{localStorage.getItem("father_name")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Όνομα Μητέρας</th>
                                <td>{localStorage.getItem("mother_name")}</td>
                            </tr>
                            <tr>
                                <th>Πολή/ Χωριό Γέννησης</th>
                                <td><input value={pobStatus} onChange={(e) => setPobStatus(e.target.value)} /></td>
                            </tr>
                            <tr class="row2">
                                <th>Αριθμός Ταυτότητας</th>
                                <td><input value={idStatus} onChange={(e) => setIdStatus(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <th>ΑΜΚΑ</th>
                                <td><input value={amkaStatus} onChange={(e) => setAmkaStatus(e.target.value)} /></td>
                            </tr>
                        </table>
                        <table id="table2" class="sp-table2">

                            <tr>
                                <th>Εξάμηνο Φοίτησης</th>
                                <td>{localStorage.getItem("semester")}</td>
                            </tr>
                            <tr class="row2">
                                <th>Ακαδημαϊκό Έτος 1ης Εγγραφής</th>
                                <td>{localStorage.getItem("year1")}</td>
                            </tr>
                            <tr>
                                <th>Ημερομηνία 1ης Εγγραφής</th>
                                <td>{localStorage.getItem("date1")}</td>
                            </tr>

                        </table>
                        <table id="table3" class="sp-table2">

                            <tr>
                                <th>Διεύθυνση Κατοικάς</th>
                                <td><input value={addressStatus} onChange={(e) => setAddressStatus(e.target.value)} /></td>
                            </tr>
                            <tr class="row2">
                                <th>Πόλη Κατοικίας</th>
                                <td><input value={cityStatus} onChange={(e) => setCityStatus(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <th>Τηλέφωνο Κατοικίας</th>
                                <td><input value={phone1Status} onChange={(e) => setPhone1Status(e.target.value)} /></td>
                            </tr>
                            <tr class="row2">
                                <th>ΤΚ Κατοικίας</th>
                                <td><input value={codeStatus} onChange={(e) => setCodeStatus(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <th>Κινητό Τηλέφωνο</th>
                                <td><input value={phone2Status} onChange={(e) => setPhone2Status(e.target.value)} /></td>
                            </tr>
                            <tr class="row2">
                                <th>Διεύθυνση Ηλεκτρονικού Ταχυδρομίου</th>
                                <td> {localStorage.getItem("email")}</td>
                            </tr>

                        </table>
                        <div class="submit-div"><button class="submit" type='submit'> <p>Αποθήκευση</p></button> </div>
                        </form>
                    </div>
                    
                </div>
                
            </div>
            
            

            <Footer />

        </div>

    )
}