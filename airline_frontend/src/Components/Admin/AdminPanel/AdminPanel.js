import React, {useState, Component } from 'react'
import { Link } from 'react-router-dom'

import '../AdminPanel/AdminPanel.css'
export default function AdminPanel(){
    
    // var getObject=localStorage.getItem('myData');
    // var x=JSON.parse(getObject).Customer_ID;
   
         var isHidden= true
    const logout=(e)=>{
            localStorage.setItem('AdminData', null); 
            
                isHidden=true
            
    }
    if(localStorage.AdminData==='undefined' || localStorage.AdminData==='null'){


        return (
            <div></div>
        )
    }
    else{
        return (
            <div>
            <div class="admin-panel">
                <h3>Control Panel</h3>
                <br></br>
            <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/addFlight" > Add New Flight Schedule</Link></li>
                <li><Link to="/AdminFlight">View Current Flight Details</Link></li>
                <li><Link to="/BookingDetails">View Purchased Flight Tickets</Link></li>
                <li><Link to="/CancelTickets">Modify Price Tag on Flights</Link></li>
                {!isHidden && < AdminPanel/>}
                <li><Link onClick={logout} to="/"> Logout</Link></li>
            </ul>
            </div>
            
        </div>)
    }
    }

