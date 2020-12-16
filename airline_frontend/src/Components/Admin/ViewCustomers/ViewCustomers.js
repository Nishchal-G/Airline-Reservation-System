import {Table} from 'react-bootstrap';
import axios from 'axios'
import moment from 'moment'
import React, { useState, useEffect } from 'react'  

export default class ViewCustomers extends React.Component{
    constructor(props){
        super(props);
        this.state={    
            users:[],
        }
    }
   componentDidMount(){
    axios.get('https://localhost:44346/GetUser').then(response=>{
        this.setState({
            users :response.data});
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
                  <th>Name</th>
                    <th>Date of Birth</th>
                      <th>Email ID</th>
                      <th>Phone Number</th>
                  </tr>
                  </thead>
                  <tbody>
                      {this.state.users.map(user=>(
                          <tr key={user.Customer_ID}>
                              <td>{user.Customer_ID}</td>
                              <td>{user.Title} {user.FirstName} {user.LastName}</td>
                              <td>{moment(user.Birthday).format('DD-MM-YYYY')}</td>
                              <td>{user.Email}</td>
                              <td>{user.Phone_Number}</td>
                          </tr>
                      ))}
                  </tbody>
                  </Table>
                  <p> </p>  
        </div>
    )
                      }
                      }