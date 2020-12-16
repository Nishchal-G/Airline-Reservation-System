import react, { useState } from 'react';
import axios from 'axios'
import '../Register/Register.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import {useForm} from 'react-hook-form';

function Register(props){
 
  const [data, setdata] = useState({Title:null,FirstName:null,LastName:null,Birthday:null,Country_of_Residence:null,Nationality:null,Email:null,Phone_Number:null,Password:null})
  const apiUrl="https://localhost:44346/AddUser/";
  const Registration =(e)=>{
    // e.preventDefault();
    debugger;
    const data1={Title:data.Title,FirstName:data.FirstName,LastName:data.LastName,Birthday:data.Birthday,Country_of_Residence:data.Country_of_Residence,Nationality:data.Nationality,Email:data.Email,Phone_Number:data.Phone_Number,Password:data.Password};
    axios.post(apiUrl,data1)
    .then((result)=>{ 
      debugger;
      console.log(result.data);
      if(result.data.Status=='Invalid')
      alert('Invalid User');
      else
      props.history.push('/Login')
    })
  }
  const onChange=(e)=>{
    e.persist();
    debugger;
    setdata({...data,[e.target.name]:e.target.value});
  }
  const { register, handleSubmit, errors } = useForm();

        return(
            <div className="register">
                <h2 class="title">Air Membership Registration</h2>
                <br/>
                
                <form onSubmit={handleSubmit(Registration)}>
  <div class="form-row">
    <div class="form-group col-md-2" >
      <label for="inputTitle">Title</label >
      <br></br>
      <select required name="Title" class="browser-default custom-select"  onChange={onChange} value={data.Title}>
  <option  selected>Title</option>
  <option value="Mr">Mr</option>
  <option value="Mrs">Mrs</option>
  <option value="Ms">Ms</option>
</select>
    </div>
    <div  class="form-group col-md-2" style={{marginLeft:'100px'}}>
      <label for="firstName">First Name</label>
      <input  name="FirstName" style={{width:'300px'}} type="text" class="form-control" id="firstName" onChange={onChange} value={data.FirstName}
      ref={register({required:true,maxLength:15,minLength:3})}/>
           {errors.FirstName && errors.FirstName.type === "required" && ( <p style={{color:'red'}}>First Name is required</p>)} 
                      {errors.FirstName && errors.FirstName.type === "minLength" && ( <p>Min length is 3</p>)} 
                      {errors.FirstName && errors.FirstName.type === "maxLength" && ( <p>max Length is 15</p>)} 
    </div>

    <div class="form-group col-md-2" style={{marginLeft:'60px'}}>
      <label for="lastName" style={{marginLeft:'60px'}} >Last Name</label>
      <input  name="LastName" style={{width:'300px'}} style={{marginLeft:'60px'}} type="text" class="form-control" id="lastName" onChange={onChange} value={data.LastName}
      ref={register({required:true,maxLength:15,minLength:3})}/>
      {errors.LastName && errors.LastName.type === "required" && ( <p style={{color:'red',marginLeft:'60px'}}>Last Name is required</p>)} 
                 {errors.LastName && errors.LastName.type === "minLength" && ( <p>Min length is 3</p>)} 
                 {errors.LastName && errors.LastName.type === "maxLength" && ( <p>max Length is 15</p>)} 
    </div>
  </div>
  
  <div class="form-row">
    <div class="form-group col-md-2">
      <label for="birthday">Birthday</label>
      <input required  name="Birthday" type="date" class="form-control" id="birthday"  onChange={onChange} value={data.Birthday}/>
    </div>
    <div class="form-group col-md-2" style={{marginLeft:'100px'}}>
      <label for="country">Country of Residence</label>
      <br></br>
      <select   name="Country_of_Residence" class="browser-default custom-select "  onChange={onChange} value={data.Country_of_Residence}>
  <option selected aria-required="true">select country of residence</option>
  <option value="India">India</option>
  <option value="Srilanka">Srilanka</option>
  <option value="Germany">Germany</option>
  <option value="China">China</option>
  <option value="Singapore">Singapore</option>
  <option value="USA">USA</option>
</select>
    </div>
    <div class="form-group col-md-2">
      <label for="country">Nationality</label>
      <br>
      </br>
      <select   name="Nationality" class="browser-default custom-select" onChange={onChange} value={data.Nationality}>
  <option selected aria-required="true">select nationality</option>
  <option value="Indian">Indian</option>
  <option value="Russian">Russian</option>
  <option value="Chinese">Chinese</option>
</select>  
  </div>
  
  </div>
  <div class="form-row">
  <div class="form-group col-md-2">
      <label for="email">Email</label>
      <input name="Email" type="email" style={{width:'250px'}} class="form-control" id="email" onChange={onChange} value={data.Email}
      ref={register({required:true,pattern:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/})}/>
      {errors.Email && errors.Email.type === "required" && ( <p style={{color:'red'}}>Email is required</p>)} 
      {errors.Email && errors.Email.type === "pattern" && ( <p style={{color:'red'}}>Email is not valid</p>)}                       
    </div>

     

    <div class="form-group col-md-2" style={{marginLeft:'100px'}}>
      <label for="phone">Phone</label>
      <input name="Phone_Number" type="number" style={{width:'250px'}} class="form-control" id="phone" onChange={onChange} value={data.Phone_Number}
      ref={register({required:true,pattern:/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/})}/>
      {errors.Phone_Number && errors.Phone_Number.type === "required" && ( <p style={{color:'red'}}>This field is required</p>)} 
      {errors.Phone_Number && errors.Phone_Number.type === "pattern" && ( <p style={{color:'red'}}>Invalid Number</p>)}                       
     </div>

    <div class="form-group col-md-2"> 
      <label for="password">Password</label>
      <input name="Password" type="password" style={{width:'300px'}} class="form-control" id="password" onChange={onChange} value={data.Password}
       ref={register({required:true, maxLength: 10, minLength: 6 })}/>
       {errors.Password && errors.Password.type === "required" && ( <p style={{color:'red'}}>Password is required</p>)} 
       {errors.Password && errors.Password.type === "minLength" && ( <p style={{color:'red'}}>Min length is 2</p>)} 
       {errors.Password && errors.Password.type === "maxLength" && ( <p style={{color:'red'}}>max Length is 20</p>)}
       </div>
  </div>
 
    
    <button class="btn btn-primary" style={{marginTop:'20px',float:'left',marginLeft:'600px',width:'100px',}}>Submit</button>
    <br></br>
    <p style={{textAlign:'left'}}>Registered Members, Click <Link to={'/Login'}>here</Link> to login</p>
    <br></br>
</form>
<Footer/>

            </div>
        )
        }
export default Register