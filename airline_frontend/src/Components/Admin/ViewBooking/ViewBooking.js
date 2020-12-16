import {Table} from 'react-bootstrap';
import axios from 'axios'
import moment from 'moment'
import React, { useState, useEffect } from 'react'  

export default class ViewBooking extends React.Component{
    constructor(props){
        super(props);
        this.state={    
            flights:[],
        }
    }
   componentDidMount(){
    axios.get('https://localhost:44346/GetBookingDetails').then(response=>{
        this.setState({
            flights :response.data});
        }
    )

   }
   

render(){

    return (
        <div>
            <Table class="table" style={{marginTop:'50px'}}>
              <thead className="btn-primary">
                  <tr>
                      
                  <th>Customer ID</th>
                    <th>Date of Booking</th>
                      <th>Flying From</th>
                      <th>Moving To</th>
                      <th>Departure Date</th>
                  </tr>
                  </thead>
                  <tbody>
                      {this.state.flights.map(flight=>(
                          <tr key={flight.Cust_Id}>
                              <td>{flight.Cust_Id}</td>
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
                      }