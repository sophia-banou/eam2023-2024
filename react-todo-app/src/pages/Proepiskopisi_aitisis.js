import React from "react"
import { useEffect, useState } from 'react';
import { db } from '../components/firebase.js';
import {Link} from "react-router-dom";
import './../css/App.css';
import './../css/Student_aitisi.css';
import Nav2 from "./../components/Nav2.js"
import Footer from "./../components/footer.js"
import Menu from "./../components/student_menu.js"

export default function Proepiskopisi_aitisis() {
    useEffect(()=> {
        // Every time you try to enter this page check if you have a saved key at the local storage. 
        // If not, then do not allow user to enter this page and redirect to login page
        if (localStorage.getItem('role') !== "student") {
            window.location.href = '/login2'
        }
    },[])
    function dosubmit(){
        window.location.href = '/oristikopoihsh2';
    }
    return (
        <div>
            <Nav2 />
            <Menu />
            <div className="breadcrumb_body5"><Link to="/students">Αρχική / </Link><Link to="/student_aitisi">Αίτηση Πιστοποιητικού / </Link><span>Προεπισκόπηση</span></div>
            <div class="icon-div">
                <Link to="/student_aitisi">
                    <img src="back-arrow.png" class="arrow-icon"></img>
                </Link>
            </div>
            <div className="aitisi_body2">
                <div class="aithsh_div1">Αίτηση {sessionStorage.getItem("aitisi")}</div>
                <div class="m-div1"> 
                    <table class="m-table1">
                        <tr>
                            <th class="mcell">ΠΡΟΣ:</th>
                            <th class="mcell">Την Γραμματεία του Τμήματος Πληροφορικής και Τηλεπικοινωνιών</th>
                        </tr>
                    </table> 
                    <table id="table1" class="m-table2">
                        <tr>
                            <th>Ονοματεπώνυμο:</th><td>{localStorage.getItem("name")}</td>
                        </tr>
                        <tr class="row2">
                            <th>Όνομα και Επώνυμο Πατέρα:</th>
                            <td>{localStorage.getItem("fn")}</td>
                        </tr>
                        <tr>
                            <th>Όνομα και Επώνυμο Μητέρας:</th>
                            <td>{localStorage.getItem("mn")}</td>
                        </tr>
                        <tr class="row2">
                            <th>Ημερομηνία Γέννησης:</th>
                            <td>{localStorage.getItem("dob")}</td>
                        </tr>
                        <tr>
                            <th>Τόπος Γέννησης:</th>
                            <td>{localStorage.getItem("pob")}</td>
                        </tr>
                        <tr class="row2">
                            <th>Αριθμός Δελτίου Ταυτότητας:</th>
                            <td>{localStorage.getItem("id")}</td>
                        </tr>                            <tr>
                            <th>Αριθμός Μητρώου:</th>
                            <td>{localStorage.getItem("am")}</td>
                        </tr>
                        <tr class="row2">
                            <th>Τόπος Κατοικίας:</th>
                            <td>{localStorage.getItem("city")}</td>
                        </tr>
                        <tr>                                
                            <th>Οδός και αριθμός:</th>
                            <td>{localStorage.getItem("address")}</td>
                        </tr>
                        <tr class="row2">
                            <th>Τ.Κ.:</th>
                            <td>{localStorage.getItem("code")}</td>
                            </tr>
                        <tr>
                            <th>Τηλέφωνο</th>
                            <td>{localStorage.getItem("phone2")}</td>
                        </tr>
                        <tr class="row2">
                            <th>Δ/νση Ηλεκτρονικού Ταχυδρομείου(email):</th>
                            <td>{localStorage.getItem("email")}</td>                            
                        </tr>
                    </table>
                    <br></br>
                                        
                    <div class="grades-next-div">
                        <button onClick={dosubmit} class="grades-next-div-b">ΥΠΟΒΟΛΗ</button>
                    </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}