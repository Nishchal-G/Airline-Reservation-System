import React, { useState,useEffect } from 'react';
import axios from 'axios'
import '../TicketForm/TicketForm.css'
import moment from 'moment'
function TicketForm(props){
 
  const [data, setdata] = useState({Cust_Id:'',date_of_booking:'',flying_from:'',moving_to:'',Departure_date:''})
  const apiUrl="https://localhost:44346/AddBookingDetails/";
  const apiUrl2='https://localhost:44346/DistinctSource';
  const [source, setSource] = React.useState([]);
  const [dest, setDest] = React.useState([]);

  const apiUrl3='https://localhost:44346/DistinctDest';
 var apivalues={
  values1:'',
  values2:''
};

  
React.useEffect(function effectFunc(){
  async function fetchDest() {
    const response = await fetch(apiUrl3);
    const json = await response.json();
    setDest(json.data);
}
fetchDest();
},[]);
  var C_ID;
var getObject;
if(localStorage!=='undefined' && localStorage !=='null'){
 getObject=localStorage.getItem('myData');
   try{ C_ID=JSON.parse(getObject).Customer_ID;}
   catch{}
}
var booking_Date=new Date().toLocaleDateString()
 var sources;
  
  const Book =(e)=>{
    e.preventDefault();
    debugger;
          
    const data1={Cust_Id:C_ID,date_of_booking:booking_Date,flying_from:data.flying_from,moving_to:data.moving_to,Departure_date:data.Departure_date};
    axios.post(apiUrl,(data1))
    .then((result)=>{ 
      debugger;
      console.log(result.data);
      if(result.data.Status=='Invalid')
      alert('Error');
      else
      alert('Booked Successfully')
      props.history.push('/')
    }).catch(error=>console.log(error))
  }
  const onChange=(e)=>{
    e.persist();
    debugger;
    setdata({...data,[e.target.name]:e.target.value});
  }
  
React.useEffect(function effectFunc(){
  fetch(apiUrl2)
  .then(res=>res.json())
  .then(({data:source})=>{
    setSource(source);
  })
},[]);
  


        return(
            <div className="booking">
              <br></br>
              <br></br>

                <h2 class="title">Book Tickets</h2>
                <br></br>
                <br/>
                <form onSubmit={Book} class="form">
                <label  onChange={onChange}>Customer ID : {C_ID}</label>
                 {/* <input type="text" name="Cust_Id"  ></input> */}
            <br></br>

            <label for="from" className="label">Flying From  &nbsp;&nbsp;&nbsp;</label>
            <select aria-required="true" name="flying_from" value={data.flying_from} class="browser-default custom-select" onChange={onChange} placeholder="Flying from">
         
           {/* {
              dest.map(k=>{
                return <option key={k} value={k[0]}>{k[0]}</option>
              }) 
                            } */}
  <option selected aria-required="true">Flying from</option>

                            <option value="Kerala">Kerala</option>
                             <option value="Koltaka">Koltaka</option>
                             <option value="Chennai">Chennai</option>
                             <option value="Hyderabad">Hyderabad</option>
                            
</select>
<br/>
<br/>
<label for="from" className="label">Moving To &nbsp;&nbsp;&nbsp;</label>
<select aria-required="true" required name="moving_to" onChange={onChange} value={data.moving_to} class="browser-default custom-select" placeholder="Moving to">
<option selected aria-required="true">Moving to</option>
<option value="London">London</option>
                             <option value="Dehli">Dehli</option>
                             <option value="Mumbai">Mumbai</option>
                             <option value="Gujarat">Gujarat</option>                 
</select>
<br/>
<br/>


        
       <label for="departure">Departure Date</label>
       <input required name="Departure_date" style={{width:'200px'}} onChange={onChange} value={data.Departure_date} type="date" class="form-control" id="departure"/>
 <br></br> 
 <label for="dateofbook" onChange={onChange}>Booking Date : {moment(booking_Date).format('DD-MM-YYYY')}</label>
<br></br>
<br></br>
 <button class="btn btn-primary" style={{float:'left',width:'100px'}}>Submit</button>

</form>
            </div>
        )
        }
export default TicketForm