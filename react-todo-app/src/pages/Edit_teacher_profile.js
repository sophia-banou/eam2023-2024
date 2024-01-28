import React, { useState, useEffect } from "react"
import Nav2 from "./../components/Nav2.js"
import Menu from "./../components/teacher_menu.js"
import "./../css/student_profile.css";
import { logout, btnTab4, btnTab5 } from '../Utils/Methods/index.js';
import Footer from "./../components/footer.js"
import { Link } from "react-router-dom";
import {doc, getDoc,updateDoc } from 'firebase/firestore'
import { db } from '../components/firebase.js';

export default function Edit_teacher_profile() {

    useEffect(() => {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "teacher") {
            window.location.href = '/login2'
        }
    }, [])


    const [nameStatus, setNameStatus] = useState('');
    const [dobStatus, setDobStatus] = useState('');
    const [fnStatus, setfnStatus] = useState('');
    const [mnStatus, setmnStatus] = useState('');

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
            name: nameStatus,
            father_name: fnStatus,
            mother_name: mnStatus,
            dob: dobStatus,
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
        if (nameStatus == "") {
            data.name = localStorage.getItem("name")
        }
        if (dobStatus == "") {
            data.dob = localStorage.getItem("dob")
        }
        if (fnStatus == "") {
            data.father_name = localStorage.getItem("fn")
        }
        if (mnStatus == "") {
            data.mother_name = localStorage.getItem("mn")
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
        localStorage.setItem('fn', data.father_name)
        localStorage.setItem('mn', data.mother_name)
        localStorage.setItem('dob', data.dob)
        localStorage.setItem('name', data.name)

        updateDoc(ref,data);
        window.location.href = './teacher_profile'
    }

    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to ="/teachers">Αρχική / </Link><Link to ="/teacher_profile">Προφίλ / </Link> <span>Επεξεργασία Προφίλ</span></div>
            <div class="icon-div">
                <Link to="/teacher_profile">
                    <img src="back-arrow.png" class="arrow-icon"></img>
                </Link>
            </div>
            <div class="sp">
                <div class="sp-div">
                </div>

                <div class="sp-div1" onLoad={btnTab4}>
                    <div class="sp-div2">
                        <img src="avatar-icon.png" class="sp-icon"></img>
                        <div class="sp-div3">
                            <div className="sp-text1">{localStorage.getItem("name")} </div>
                        </div>

                    </div>
                    <div class="div-table">
                        <table class="sp-table1">
                            <tr>
                                <th id="tpb1" onClick={btnTab4} class="active2">Προσωπικά Στοιχεία</th>
                                <th id="tpb3" onClick={btnTab5} class="cell2">Πληροφορίες Επικοινωνίας</th>

                            </tr>
                        </table>
                        <form onSubmit={handleEdit}>
                        <table id="ttable1" class="pr-table2">
                            <tr>
                                <th>Ονοματεπώνυμο</th>
                                <td><input value={nameStatus} onChange={(e) => setNameStatus(e.target.value)} /></td>
                            </tr>
                            <tr class="row2">
                                <th>Ημερομηνία Γέννησης</th>
                                <td><input value={dobStatus} onChange={(e) => setDobStatus(e.target.value)} /></td>
                            </tr>
                            <tr class="row2">
                                <th>Οικογενειακή Κατάσταση</th>
                                <td><input value={mStatus} onChange={(e) => setMStatus(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <th>Όνομα Πατέρα</th>
                                <td><input value={fnStatus} onChange={(e) => setfnStatus(e.target.value)} /></td>
                            </tr>
                            <tr class="row2">
                                <th>Όνομα Μητέρας</th>
                                <td><input value={mnStatus} onChange={(e) => setmnStatus(e.target.value)} /></td>
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
                
                        <table id="ttable3" class="pr-table2">

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
                        <div class="sp-save-div2">
                            <button type="submit" class="sp-save-div-b2">Αποθήκευση</button>
                        </div>
                        </form>
                    </div>
                    
                </div>
                
            </div>
            
            

            <Footer />

        </div>

    )
}