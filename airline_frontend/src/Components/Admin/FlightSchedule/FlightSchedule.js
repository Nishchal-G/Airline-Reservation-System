import React, { Component } from 'react'
import {Table,Button} from 'react-bootstrap';
import axios from 'axios'
import '../FlightSchedule/FlightSchedule.css'

const apiUrl='https://localhost:44346/GetFightDetails';

class AdminFlightSchedule extends React.Component {
  
    constructor(props){
        super(props);
        this.state={
            error:null,
            flights:[],
            response:{},
            values:[]
        }

      
    }
    componentDidUpdate(){ 
        function reloadPage() {
     // The last "domLoading" Time //
     var currentDocumentTimestamp =
     new Date(performance.timing.domLoading).getTime();
     // Current Time //
     var now = Date.now();
     // Ten Seconds //
     var tenSec = 1 * 1000;
     // Plus Ten Seconds //
     var plusTenSec = currentDocumentTimestamp + tenSec;
     if (now > plusTenSec) {
     window.location.reload();
     } else {}
     }
     reloadPage();
     console.log('reloaded')
     if((localStorage.myData!=='null' && localStorage.myData!=='undefined')){
         document.getElementById('nav').style.display="none"
         document.getElementById('nav2').style.display="block"
     
       }
       if((localStorage.AdminData!=='null' && localStorage.AdminData!=='undefined')){
         document.getElementById('nav').style.display="none"
             document.getElementById('nav3').style.display="block"
       }
    }
    componentDidMount(){
        function reloadPage() {
            // The last "domLoading" Time //
            var currentDocumentTimestamp =
            new Date(performance.timing.domLoading).getTime();
            // Current Time //
            var now = Date.now();
            // Ten Seconds //
            var tenSec = 1 * 1000;
            // Plus Ten Seconds //
            var plusTenSec = currentDocumentTimestamp + tenSec;
            if (now > plusTenSec) {
            window.location.reload();
            } else {}
            }
            reloadPage();
        fetch(apiUrl)
         .then(function(res) {
             return res.json();
         }).then((json)=> {
             this.setState({
                values: json
             })
         })
        axios.get(apiUrl).then(response=>response.data).then(
            (result)=>{
                this.setState({
                    flights:result
                });
            },
            (error)=>{
                this.setState({error});
            }
        )
    }

    render() {
        const{error,flights}=this.state;
        if(error){
            return(
                <div>Error:{error.message}</div>
            )
        }
        else{
        return (
            <div>
                <h2 style={{textAlign:'left',marginLeft:'120px',marginTop:'30px'}}>Our Flight Schedule</h2>
                <br/><div>
                <img height='200px' style={{display:'flex',marginLeft:'360px'}} width='300px' src="https://cdn.pixabay.com/photo/2019/09/05/15/25/airbus-4454338__340.jpg"/>
                </div>
                <Table class="table" style={{marginTop:'50px'}}>
                  <thead className="btn-primary">
                      <tr>
                          <th>Day</th>
                          <th>Source</th>
                          <th>Destination</th>
                          <th>Departure Time</th>
                          <th>Arrival Time</th>
                      </tr>
                      </thead>
                      <tbody>
                          {flights.map(flight=>(
                              <tr key={flight.Flight_id}>
                                  <td>{flight.Day}</td>
                                  <td>{flight.Source}</td>
                                  <td>{flight.Destination}</td>
                                  <td>{flight.Departure_time.substring(0,5)+'  Hrs'}</td>
                                  <td>{flight.Arrival_time.substring(0,5)+'  Hrs'}</td>
                              </tr>
                          ))}
                      </tbody>
                      </Table>  
              
            </div>
        )
    }
}
}
export default AdminFlightSchedule;