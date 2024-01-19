import React from "react";
import "./../css/dilosi_message.css";

export default function Message() {
    const smonth = localStorage.getItem("startmonth");
    const syear = localStorage.getItem("startyear");
    const sdate = localStorage.getItem("startday");
    const emonth = localStorage.getItem("endmonth");
    const eyear = localStorage.getItem("endyear");
    const edate =localStorage.getItem("endday");
    var start = `${smonth}/${sdate}/${syear}`;
    var end = `${emonth}/${edate}/${eyear}`;
    return( 
        <div className='rectangle_long1'>
            <div className="Message_div">
            Η προθεσμία δήλωσης μαθημάτων για το χειμερινό εξάμηνο είναι από τις {start} μέχρι τις {end}
            </div>
        </div>
    )
}