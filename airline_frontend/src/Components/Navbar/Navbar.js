import react, { Component } from 'react'
import { Link } from 'react-router-dom'
import ControlPanel from '../Control_panel/ControlPanel'
import '../Navbar/Navbar.css'
class Navbar extends Component{
    
    render(){
      var x;
var getObject;
try{
  getObject=localStorage.getItem('myData');
   x=JSON.parse(getObject).Customer_ID;
   console.log(x);
}catch{}

      let style={
        display:'block'
      };
      let style1={
        display:'none'
      };
      const logout=(e)=>{
        document.getElementById('nav').style.display="block"
        document.getElementById('nav2').style.display="none"
        localStorage.setItem('myData', null); 
   
      }
      const adminLogout=(e)=>{
        document.getElementById('nav').style.display="block"
        document.getElementById('nav3').style.display="none"
        localStorage.setItem('AdminData', null); 
        
        
}
      if((localStorage.myData!=='null' && localStorage.myData!=='undefined')){
       
        style={
          display:'block'
        };
        
      }
        return(
            <div>
                <nav id='nav' style={{display:'block'}} class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to={'/'} style={{color:'white'}}><h5>Rwenzori Airlines</h5></Link>
      </li>
      {/* <li class="nav-item">
        <Link class="nav-link" to={'/About'} style={{color:'white'}}>About Us</Link>
      </li> */}
      <li class="nav-item">
        <Link class="nav-link" to={'/FlightSchedule'} style={{color:'white'}}>Flight Schedule</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={'/Contact'} style={{color:'white'}}>Contact Us</Link>
      </li>
      <li class="nav-item">
        <div style={style}>
        <Link class="nav-link"   to={'/Register'} style={{display:"block",color:'white'}} id="reg">Register</Link>
        </div>
      </li>
      <li class="nav-item">
        <div style={style}> 
        <Link class="nav-link"  to={'/Login'} style={{display:"block",color:'white'}} id="log">Login</Link>
        </div>
        </li>
       
    </ul>
  </div>
</nav>
<nav id='nav2' style={{display:'none'}} class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      {/* <li class="nav-item active">
        <Link class="nav-link" to={'/'}>Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={'/About'}>About Us</Link>
      </li> */}
      <li class="nav-item">
        <Link class="nav-link" to={'/FlightSchedule'}  style={{color:'white'}}>Flight Schedule</Link>
      </li>
      {/* <li class="nav-item">
        <Link class="nav-link" to={'/Contact'}>Contact Us</Link>
      </li> */}
        <li class="nav-item">
        <div style={style}> 
        <Link class="nav-link" to={'/UpdateProfile/'+x} style={{display:"block",color:'white'}} id="update"> Update Profile</Link>
        </div>
        </li>
        <li class="nav-item"> 
        <div style={style}> 
        <Link class="nav-link" to={"/BookingDetails/"+x} style={{display:"block",color:'white'}} id="Booking">View Purchased Tickets</Link>    
        </div>
        </li>
        <li class="nav-item">
        <div style={style}> 
        <Link class="nav-link" to="/TicketBook" style={{display:"block",color:'white'}} id="bookTicket">Book Tickets</Link>
        </div>
        </li>
        <li class="nav-item">
        <div style={style}> 
        <Link class="nav-link" onClick={logout} to="/" style={{display:"block",color:'white'}} id="logout"> Logout</Link>
        </div>
        </li>
      
     
    </ul>
  </div>
</nav>

<nav id='nav3' style={{display:'none'}} class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      {/* <li class="nav-item active">
        <Link class="nav-link" to={'/'}>Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={'/About'}>About Us</Link>
      </li> */}
      <li class="nav-item">
        <Link class="nav-link" to={'/AdminFlight'}  style={{color:'white'}}>Flight Schedule</Link>
      </li>
        <li class="nav-item">
        <div style={style}> 
        <Link class="nav-link" to={'/addFlight'} style={{display:"block",color:'white'}} id="addFlight"> Add Flight Schedule</Link>
        </div>
        </li>
        <li class="nav-item"> 
        <div style={style}> 
        <Link class="nav-link" to="/Booking_Details" style={{display:"block",color:'white'}} id="Booking">View Purchased Tickets</Link>    
        </div>
        </li>
        <li class="nav-item">
        <div style={style}> 
        <Link class="nav-link" to="/viewCustomers" style={{display:"block",color:'white'}} id="viewCustomers">View Customers</Link>
        </div>
        </li>
        <li class="nav-item">
        <div style={style}> 
        <Link class="nav-link" onClick={adminLogout} to="/" style={{display:"block",color:'white'}} id="logout"> Logout</Link>
        </div>
        </li>
      
     
    </ul>
  </div>
</nav>

            </div>
        )
    }
}
export default Navbar