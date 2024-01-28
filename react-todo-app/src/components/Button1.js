import React from "react";
import "./../css/App.css";
import "./../css/Student_dilosi.css"
import { GetBoxValue } from '../Utils/Methods/index.js';


export default function Button1() {
    return( 
        <button id="help-button"> 
            Βοήθεια 
        </button>
    )
}

export function Button2() {
    return( 
        <button id="help-button2"> 
            Βοήθεια 
        </button>
    )
}
export function Button3() {
    return( 
        <div class="dilosi-pr-div">
        <div onClick={GetBoxValue} className="dilosi-pr-div-b">Προσωρινή Αποθήκευση</div>
        </div>
    )
}