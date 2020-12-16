import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
import '../Login/login.css'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form';

function LoginUser(props) {  
  
    var isHidden=true;
    const [user, setuser] = useState({ Email: '', Password: ''});  
    const apiUrl = "https://localhost:44346/login";    
    const Login = (e) => {    
            // e.preventDefault();    
            const data = { Email:user.Email, Password: user.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.UserDetails;  
                console.log(result.data.message);  
                if (result.data.status == '200')  
             {   alert('Login Successful') 
                    props.history.push('/FlightSchedule')    
            } 
                else    
                alert('Invalid User');    
            })        
          };    
          const onChange = (e) => {    
                e.persist();    
                
                setuser({...user, [e.target.name]: e.target.value});    
              }
              const { register, handleSubmit, errors } = useForm();  
              
const Onload=()=>{
              document.getElementById('update').style.display="none";
              document.getElementById('Booking').style.display="none";
              document.getElementById('cancel').style.display="none";
              document.getElementById('logout').style.display="none";
              document.getElementById('reg').style.display="block";
              document.getElementById('log').style.display="block";
}
          

    return (    
        <div onLoad={Onload}>
                <h3 style={{marginTop:'30px',marginLeft:'120px',marginBottom:'30px',float:'left'}}>User Login Page</h3>
               
                <br></br>

                <form class="form" onSubmit={handleSubmit(Login)}>
                
      <br></br>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="Email" value={user.Email} onChange={onChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     ref={register({required:true,pattern:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/})}/>
     {errors.Email && errors.Email.type === "required" && ( <p style={{color:'red'}}>Email is required</p>)} 
     {errors.Email && errors.Email.type === "pattern" && ( <p style={{color:'red'}}>Email is not valid</p>)}                       
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="Password" value={user.Password} onChange={onChange} class="form-control" id="exampleInputPassword1"
    ref={register({required:true})}/>
    {errors.Password && errors.Password.type === "required" && ( <p style={{color:'red'}}>Password is required</p>)} 
   </div>
  <br></br>
  <button type="submit"  style={{float:'left',marginLeft:'120px',width:'100px'}} class="btn btn-primary">Submit</button>
  
  <br></br>
  
  <br></br>
  <h6 style={{marginLeft:'120px'}}>For Admin Login, <Link to="/adminlogin">Click here</Link></h6>
</form>
            </div>
    )  
}  
  
export default LoginUser