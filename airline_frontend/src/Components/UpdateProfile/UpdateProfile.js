import '../UpdateProfile/UpdateProfile.css'
import React, { useState, useEffect } from 'react'  
import {useForm} from 'react-hook-form';

import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';  
var x;
var getObject;
function EditUser(props) {  
  if(localStorage.myData!=='undefined' || localStorage.myData!=='null'){
    try{
        getObject=localStorage.getItem('myData');
         x=JSON.parse(getObject).Customer_ID;
    }catch{}
        }
    
        const [user, setuser]= useState({Customer_ID:'',FirstName: '', LastName: '', Email: '',Nationality:'',Country_of_Residence:'',Phone_Number:''});
        console.log(props.match.params.id);  
        const Url = "https://localhost:44346/GetUserById?id=" + props.match.params.id;  
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
           
            
          };     
          GetData();  
        }, []);  
        const UpdateUser = (e) => {  
          // e.preventDefault();  
          const data = {Customer_ID:props.match.params.id, FirstName:user.FirstName, LastName: user.LastName, Email: user.Email,Nationality:user.Nationality,Country_of_Residence:user.Country_of_Residence,Phone_Number:user.Phone_Number};  
         console.log('data' +data);
          axios.post('https://localhost:44346/EditUser', data)  
            .then((result) => {  
                console.log(result.data);
                alert('Profile Updated')
            }) 
        }    
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  
        const { register, handleSubmit, errors } = useForm();


        return (  
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={handleSubmit(UpdateUser)} style={{width:'300px',marginLeft:'150px'}}>  
                            <h2>Update Profile </h2>  
                            <p>Customer ID: {x}</p>             
                            <InputGroup className="mb-3">  
                            <input  name="FirstName" style={{width:'300px'}} type="text" class="form-control" id="firstName" onChange={onChange} value={user.FirstName}
      ref={register({required:true,maxLength:15,minLength:3})}/>
           {errors.FirstName && errors.FirstName.type === "required" && ( <p style={{color:'red'}}>First Name is required</p>)} 
                      {errors.FirstName && errors.FirstName.type === "minLength" && ( <p style={{color:'red'}}>Min length is 3</p>)} 
                      {errors.FirstName && errors.FirstName.type === "maxLength" && ( <p style={{color:'red'}}>max Length is 15</p>)} 
    </InputGroup>  
                             <InputGroup className="mb-3">  
                             <input  name="LastName" style={{width:'300px'}}  type="text" class="form-control" id="lastName" onChange={onChange} value={user.LastName}
      ref={register({required:true,maxLength:15,minLength:3})}/>
      {errors.LastName && errors.LastName.type === "required" && ( <p style={{color:'red',marginLeft:'60px'}}>Last Name is required</p>)} 
                 {errors.LastName && errors.LastName.type === "minLength" && ( <p style={{color:'red'}}>Min length is 3</p>)} 
                 {errors.LastName && errors.LastName.type === "maxLength" && ( <p style={{color:'red'}}>max Length is 15</p>)} 
    </InputGroup>  
                            <InputGroup className="mb-3">  
                            <input name="Email" type="email" style={{width:'250px'}} class="form-control" id="email" onChange={onChange} value={user.Email}
      ref={register({required:true,pattern:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/})}/>
      {errors.Email && errors.Email.type === "required" && ( <p style={{color:'red'}}>Email is required</p>)} 
      {errors.Email && errors.Email.type === "pattern" && ( <p style={{color:'red'}}>Email is not valid</p>)}                       
    </InputGroup>       

                             <InputGroup className="mb-3">  
                             <Input type="text" name="Nationality" id="lName" placeholder="Nationality" value={user.Nationality} onChange={ onChange }  />  
                            </InputGroup>  
                            <InputGroup className="mb-3">  
                              <Input type="text" placeholder="Country of Residence" name="Country_of_Residence" id="Country_of_Residence"  value={user.Country_of_Residence} onChange={ onChange }  />  
                            </InputGroup>       

                            <InputGroup className="mb-3">  
                            <input name="Phone_Number" type="number" style={{width:'250px'}} class="form-control" id="phone" onChange={onChange} value={user.Phone_Number}
      ref={register({required:true,pattern:/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/})}/>
      {errors.Phone_Number && errors.Phone_Number.type === "required" && ( <p style={{color:'red'}}>This field is required</p>)} 
      {errors.Phone_Number && errors.Phone_Number.type === "pattern" && ( <p style={{color:'red'}}>Invalid Number</p>)}     
                            </InputGroup>        
                          <br></br> 
                          <Button style={{float:'left',marginLeft:'110px'}} type="submit" className="btn btn-info mb-1" ><span>Update</span></Button>  
                                            
     
                          </Form>  
                        </CardBody>                 
                      </Card>  
                    </Col>  
                  </Row>  
               
                </Container>  
              </div>  
        )  
}  
  
export default EditUser