import React from "react";
import {checkAll, GetCheckboxValue} from '../Utils/Methods/index.js';
import "./../css/dilosi_message.css";

export default function Message2() {
    return( 
        <div>
        <div className='rectangle_long2'>
            <div className="Message_div">
            Προσοχή! Δεν έχει αρχίσει ακόμα η περίοδος δηλώσεων.
            </div>
        </div>
        <div class="d-div1">   
                <div class="div-table">
                    <table class="d-table2">
                        <tr>
                            <th class="dcell"></th>
                            <th class="dcell">Όνομα μαθήματος</th>
                            <th class="dcell">Κατεύθυνση</th>
                            <th class="dcell">Εξάμηνο</th>
                            <th class="dcell">Κατηγορία</th>
                        </tr>
                        <tr>
                            <th><input disabled type="checkbox" class="cb" id="check1" value="eam"/></th>
                            <th>Επικοινωνία Ανθρώπου Μηχανής</th>
                            <th>Α</th>
                            <th>7ο</th>
                            <th>Κατ' Επιλογήν Υποχρεωτικό</th>
                        </tr>
                        <tr class="drow2">
                            <th><input disabled type="checkbox" class="cb" id="check2" value="ss"/></th>
                            <th>Σήματα & Συστήματα</th>
                            <th>Κοινό</th>
                            <th>3ο</th>
                            <th>Υποχρεωτικό</th>
                        </tr>
                        <tr>
                            <th><input disabled type="checkbox" class="cb" id="check3" value="tn"/></th>
                            <th>Τεχνητή Νοημοσύνη Ι</th>
                            <th>Α</th>
                            <th>5ο</th>
                            <th>Προαιρετικό</th>
                        </tr>
                        <tr class="drow2">
                            <th><input disabled type="checkbox" class="cb" id="check4" value="g1"/></th>
                            <th>Γραφικά Ι</th>
                            <th>Α</th>
                            <th>5ο</th>
                            <th>Προαιρετικό</th>
                        </tr>
                    </table>
                </div>
                
            </div>
        </div>
    )
}