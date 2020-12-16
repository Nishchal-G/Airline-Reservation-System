import React, {useState, Component } from 'react'
import { Link } from 'react-router-dom'

import '../Control_panel/ControlPanel.css'
var x;
var getObject
export default function ControlPanel(){
    if(localStorage.myData!=='undefined' || localStorage.myData!=='null'){
try{
    getObject=localStorage.getItem('myData');
     x=JSON.parse(getObject).Customer_ID;
}catch{}
    }
    
    //      var isHidden= true
   
    // if(localStorage.myData==='undefined' || localStorage.myData==='null'){


    //     return (
    //         <div></div>
    //     )
    // }
    // else{
        return (
            <div>
            <div class="control-panel" id="control" style={{display:"block"}}>
                <h3>Control Panel</h3>
                <br></br>
            <ul>
                
                <li><Link to="/">Home</Link></li>
                <li></li>
                <li><Link to="/FlightSchedule">View Current Flight Details</Link></li>
                <li></li>
                <li></li>
                <li><Link to="/BookTicket">Book a Flight Ticket</Link></li>
                <li></li>
            </ul>
            </div>
            
        </div>
        )
    
}

