import {Table} from 'react-bootstrap';
import axios from 'axios'
import '../BookingDetails/BookingDetails.css'

import React, { useState, useEffect } from 'react'  
import moment from 'moment'
export default function BookingDetails(props){

    var x=[];
    var getObject;
    if(localStorage.myData!=='undefined' || localStorage.myData!=='null'){
        try{
            getObject=localStorage.getItem('myData');
             x=JSON.parse(getObject).Booking_details;
        }catch{}
            }

        return (
            <div>
                <Table class="table" style={{marginTop:'50px'}}>
                  <thead className="btn-primary">
                      <tr>
                          <th>Date of Booking</th>
                          <th>Flying From</th>
                          <th>Moving To</th>
                          <th>Departure Date</th>
                      </tr>
                      </thead>
                      <tbody>
                          {x.map(flight=>(
                              <tr key={flight.Cust_Id}>
                                  <td>{moment(flight.date_of_booking).format('DD-MM-YYYY')}</td>
                                  <td>{flight.flying_from}</td>
                                  <td>{flight.moving_to}</td>
                                  <td>{moment(flight.Departure_date).format('DD-MM-YYYY')}</td>
                              </tr>
                          ))}
                      </tbody>
                      </Table>
                      <p> </p>  
            </div>
        )
                          }
//     }
// }
