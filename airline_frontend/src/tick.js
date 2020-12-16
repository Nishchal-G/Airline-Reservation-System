import React, { Component } from 'react';
import axios from 'axios';
import '../HomePage/Register.css';
import { Link, Route, Switch } from 'react-router-dom';

import {Container,Col,Form,Row,FormGroup,Label,Input,Button} from 'reactstrap';

export default class BookTicket extends Component {
  

    constructor(props){
        super(props)
            this.state={
                CustomerID:'', 
                BookingDate:'',
                Source:'',
                Destination:''
                   
            }  
        }
        AddBookingInfo=()=> {
                 axios.post('https://localhost:44346/AddBookingDetails',{CustomerID:this.state.CustomerID, BookingDate:this.state.BookingDate, Source:this.state.Source, Destination:this.state.Destination})
                 .then(json=>{
                     //if(json.data.Status==='Success'){
                         console.log(json.data.Status);
                         alert('Data added successfully');
                         this.props.history.push('/FlightDetails')
                     //}
                    //  else{
                    //  alert('Data is not added');
                    //  debugger;
                    //  this.props.history.push('/UserList')
                 //}
                })
            }

            handleChange= (e) => {
                this.setState({[e.target.name]:e.target.value});
            }

            render(){
                return(
                    <div className="row">
                    <div className="col">
                    <Container className="App">
                    <br></br><br></br><br></br>
                    <Form className="form">
                    <Col>

                    <FormGroup row>
                    <Label for="cid" sm={2}>Customer ID</Label>
                    <Col sm={10}>
                    <Input type="text" name="CustomerID" onChange={this.handleChange} value={this.state.name} placeholder="Enter your ID  "></Input>
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label for="bookingdate" sm={2}>Date of Booking</Label>
                    <Col sm={10}>
                    <Input type="date" name="BookingDate" onChange={this.handleChange} value={this.state.name} placeholder="Enter date of booking  "></Input>
                    </Col>
                    </FormGroup>

                    
                    <FormGroup row>
                    <Label for="source" sm={2}>Source City</Label>
                    <Col sm={10}>
                    <Input type="text" name="Source" onChange={this.handleChange} value={this.state.name} placeholder="Enter source city "></Input>
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label for="destination" sm={2}>Destination City</Label>
                    <Col sm={10}>
                    <Input type="text" name="Destination" onChange={this.handleChange} value={this.state.name} placeholder="Enter destination city  "></Input>
                    </Col>
                    </FormGroup>

                    

                    

                    <FormGroup row>
                    <Col sm={1}>
                        <button type="button" onClick={this.AddBookingInfo} className="btn btn-success">Submit</button>
                    </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Col sm={1}>
                    <Button color="danger">Cancel</Button>{' '}
                    </Col>
                    </FormGroup>

                    
                    </Col>
                    </Form>
                    </Container>
                    </div>
                    {/* <div className="col">
                    <ul >
                        <h4>User Control Panel</h4><br></br>

      <li >
        <Link to={'./UserHomepage'} >My Profile </Link>
      </li>
      <li>
        <Link to={'./FlightDetails'}  >View Flight Details</Link>
      </li>
      <li >
        <Link to={'./ContactUs'}  >View Purchased Tickets</Link>
      </li>
      <li >
        <Link to={'./BookTicket'} >Book a Flight Ticket</Link>
      </li>
      <li >
        <Link to={'./Login'}  >Logout</Link>
      </li>
    </ul>
                    </div> */}
                    </div>
                );}
}