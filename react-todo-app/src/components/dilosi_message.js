import React from "react";
import {checkAll, GetCheckboxValue} from '../Utils/Methods/index.js';
import { useEffect} from "react";
import { db } from '../components/firebase.js';
import {doc, getDoc} from 'firebase/firestore'
import "./../css/dilosi_message.css";
import "./../css/Student_dilosi.css";

export default function Message() {
    var limit;
    
    async function getLimit (){
        var semester = localStorage.getItem("semester");
    
        const ref = doc(db, "limits", semester); 
        const res = await getDoc(ref);
        limit = res.data().mathimata;
    }

    async function handleChange (e){
        var inputs = document.querySelectorAll('.cb');
        var temp = 0;
        for (var i = 0; i < inputs.length; i++) {
            if(inputs[i].checked === true){
                temp++;
            }
        }
        if (temp > limit){
            e.target.checked = false;
            document.getElementById("result").innerHTML = "Έχετε φτάσει το ανώτατο όριο μαθημάτων για το εξάμηνο σας";
        }
        else{
            document.getElementById("result").innerHTML = null;
        }
    }
    useEffect(()=> {
        getLimit();
        getCourse();
    },[])

    const smonth = localStorage.getItem("startmonth");
    const syear = localStorage.getItem("startyear");
    const sdate = localStorage.getItem("startday");
    const emonth = localStorage.getItem("endmonth");
    const eyear = localStorage.getItem("endyear");
    const edate =localStorage.getItem("endday");
    var start = `${smonth}/${sdate}/${syear}`;
    var end = `${emonth}/${edate}/${eyear}`;

    async function getCourse (){
    
        const ref = doc(db, "courses", "all_courses"); 
        const res = await getDoc(ref);

        let table = '<table class="d-table2">';  
        table += '<tr><th class="dcell"></th><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Εξάμηνο</th><th class="dcell">Κατηγορία</th></tr>';  

        var courses = res.data().courses;

        for (var id = 0; id < courses.length; id++){
            var track = courses[id].track;
            var name = courses[id].name;
            var semester = courses[id].semester;
            var category = courses[id].category;
            table += `<tr><th><input type="checkbox" class="cb" onChange="${handleChange()}"/></th><th>${name}</th><th>${track}</th><th>${semester}</th><th>${category}</th></tr>`; 
        }
        table += '</table>'; 
        var dil = document.getElementById("diloseis-table");  
        if (dil){ dil.innerHTML = table;}
    }
    return( 
        <div>
        <div className='rectangle_long1'>
            <div className="Message_div">
            Η προθεσμία δήλωσης μαθημάτων για το χειμερινό εξάμηνο είναι από τις {start} μέχρι τις {end}
            </div>
        </div>
        <div class="d-div1">  
            {/* <div class="button-div"> <button onClick={checkAll}> Επιλογή Όλων</button> </div>      */}
                <div id="diloseis-table">
                    {/* <table class="d-table2">
                    <tr><th class="dcell"></th><th class="dcell">Όνομα Μαθήματος</th><th class="dcell">Κατεύθυνση</th><th class="dcell">Εξάμηνο</th><th class="dcell">Κατηγορία</th></tr>
                    <tr><th><input type="checkbox" class="cb" onChange={handleChange()}/></th><th>${name}</th><th>${track}</th><th>${semester}</th><th>${category}</th></tr>
                    </table> */}

                </div>
                    {/* <table class="d-table2">
                        <tr>
                            <th class="dcell"></th>
                            <th class="dcell">Όνομα μαθήματος</th>
                            <th class="dcell">Κατεύθυνση</th>
                            <th class="dcell">Εξάμηνο</th>
                            <th class="dcell">Κατηγορία</th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" class="cb" id="check1" value="eam" onChange={handleChange}/></th>
                            <th>Επικοινωνία Ανθρώπου Μηχανής</th>
                            <th>Α</th>
                            <th>7ο</th>
                            <th>Κατ' Επιλογήν Υποχρεωτικό</th>
                        </tr>
                        <tr class="drow2">
                            <th><input type="checkbox" class="cb" id="check2" value="ss" onChange={handleChange}/></th>
                            <th>Σήματα & Συστήματα</th>
                            <th>Κοινό</th>
                            <th>3ο</th>
                            <th>Υποχρεωτικό</th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" class="cb" id="check3" value="tn"onChange={handleChange}/></th>
                            <th>Τεχνητή Νοημοσύνη Ι</th>
                            <th>Α</th>
                            <th>5ο</th>
                            <th>Προαιρετικό</th>
                        </tr>
                        <tr class="drow2">
                            <th><input type="checkbox" class="cb" id="check4" value="g1"onChange={handleChange}/></th>
                            <th>Γραφικά Ι</th>
                            <th>Α</th>
                            <th>5ο</th>
                            <th>Προαιρετικό</th>
                        </tr>
                    </table> */}


                <div className="dilosi_rectangle1">
                    <div onClick={GetCheckboxValue} className="dilosi_div">Προσωρινή Αποθήκευση</div>
                </div>
                
            </div>
            <h4 class="error1" id="result"></h4>  
        </div>
    )
}