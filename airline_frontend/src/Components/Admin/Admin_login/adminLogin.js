import '../Admin_login/adminLogin.css'
import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
export default function LoginAdmin(props) {  

  var isHidden=true;
  const [user, setuser] = useState({ Email: '', Password: ''});  
  const apiUrl = "https://localhost:44346/adminLogin";    
  const Login = (e) => {    
          e.preventDefault();    
          const data = { Email:user.Email, Password: user.Password };    
          axios.post(apiUrl, data)    
          .then((result) => {    
          
              if (result.data.status == '200')   {
                  props.history.push('/AdminFlight')  
                  const serializedState = JSON.stringify(data);  
                  localStorage.setItem('AdminData', serializedState);   
              }
                  else    
              alert('Invalid Details');    
          })        
        };    
        
        //  const LogUser=(e)=>{
        //    e.preventDefault();
        //     isHidden=false;
        //     return isHidden && <ControlPanel/>

          

        //  }
        const onChange = (e) => {    
              e.persist();    
              
              setuser({...user, [e.target.name]: e.target.value});    
            }    
  return (    
      <div>
              <h3 style={{marginLeft:'120px',marginBottom:'30px',float:'left'}}>Rwenzori Airlines Administrator Log In Page</h3>
              <form class="form" onSubmit={Login}>
              
    
<div class="form-group">
  <label for="exampleInputEmail1">Email address</label>
  <input type="email" name="Email" value={user.Email} onChange={onChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input type="password" name="Password" value={user.Password} onChange={onChange} class="form-control" id="exampleInputPassword1"/>
</div>
<br></br>
<button type="submit"  style={{float:'left',marginLeft:'120px',width:'100px'}} class="btn btn-primary">Submit</button>
</form>
          </div>
  )  
}  