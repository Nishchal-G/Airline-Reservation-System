import react, { useState } from 'react'
import axios from 'axios'
import '../Add_flight/add_flight.css'
import {useForm} from 'react-hook-form';

export default function AddFlight(props){
  const [data, setdata] = useState({Source:'',Destination:'',Departure_time:'',Arrival_time:'',Day:''})
  const apiUrl='https://localhost:44346/AddFlightSchedule/';
  const Add_Flight =(e)=>{
    // e.preventDefault();
    const data1={Source:data.Source,Destination:data.Destination,Departure_time:data.Departure_time,Arrival_time:data.Arrival_time,Day:data.Day};
    axios.post(apiUrl,data1)
    .then((result)=>{
      console.log(result.data);
      alert('Successfully Added')
      props.history.push('/')
    }).catch(error=>console.log(error))
  }
  const onChange=(e)=>{
    e.persist();
    setdata({...data,[e.target.name]:e.target.value});
  }
  const { register, handleSubmit, errors } = useForm();

        return(
            <div>
                <h3 style={{marginTop:'10px',marginLeft:'120px',marginBottom:'30px',float:'left'}}>Rwenzori Airline</h3>
                <br></br>
                <form class="form" onSubmit={handleSubmit(Add_Flight)}>
  <div class="form-group">
      <br></br>
    <label for="srcCity" style={{float:'left'}}>Source City</label>
    <input type="text" onChange={onChange} value={data.Source} name="Source" class="form-control" id="srcCity"
     ref={register({required:true})}/>
     {errors.Source && errors.Source.type === "required" && ( <p style={{color:'red'}}>Source is required</p>)} 
               </div>
  <div class="form-group">
    <label for="desCity" style={{float:'left'}}>Destination City</label>
    <input type="text" onChange={onChange} value={data.Destination}  name="Destination" class="form-control" id="desCity"
     ref={register({required:true})}/>
     {errors.Destination && errors.Destination.type === "required" && ( <p style={{color:'red'}}>Destination is required</p>)} 
              </div>
  <div class="form-group">
    <label for="arrTime" style={{float:'left'}}>Arrival Time</label>
    <input type="text" onChange={onChange} value={data.Arrival_time}  name="Arrival_time" class="form-control" id="arrTime"
      ref={register({required:true,maxLength:5})}/>
     {errors.Arrival_time && errors.Arrival_time.type === "required" && ( <p style={{color:'red'}}>Arrival time is required</p>)} 
     {errors.Arrival_time && errors.Arrival_time.type === "maxLength" && ( <p style={{color:'red'}}>Time is not valid</p>)} 
  </div>
  <div class="form-group">
    <label for="TakeOff" style={{float:'left'}}>Take Off Time</label>
    <input type="text" onChange={onChange} value={data.Departure_time}  name="Departure_time" class="form-control" id="TakeOff"
     ref={register({required:true,maxLength:5})}/>
     {errors.Departure_time && errors.Departure_time.type === "required" && ( <p style={{color:'red'}}>Departure time is required</p>)} 
     {errors.Departure_time && errors.Departure_time.type === "maxLength" && ( <p style={{color:'red'}}>Time is not valid</p>)} 
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1" style={{float:'left'}}>Flight Day</label>
    <select aria-required="true" required class="form-control" onChange={onChange} value={data.Day}  name="Day" id="exampleFormControlSelect1">
    <option selected aria-required="true">Select Day</option>
      <option>Sunday</option>
      <option>Monday</option>
      <option>Tuesday</option>
      <option>Wednesday</option>
      <option>Thursday</option>
      <option>Friday</option>
      <option>Saturday</option>
    </select>
  </div>
  <br></br>
  <button style={{float:'left',marginLeft:'200px',marginBottom:'30px',width:'100px'}} class="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
