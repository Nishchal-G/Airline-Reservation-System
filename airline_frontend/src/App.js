import logo from './logo.svg';
import './App.css';
import react from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {Route,Switch,Redirect,Link,NavLink} from 'react-router-dom'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Contact from './Components/Contact_us/Contact';
import Register from './Components/Register/Register';
import AddFlight from './Components/Admin/Add_flight/add_flight';
import FlightSchedule from './Components/Flight_Schedule/FlightSchedule';
import ControlPanel from './Components/Control_panel/ControlPanel';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import TicketForm from './Components/TicketForm/TicketForm';
import ShowAdPanel from './Components/Admin/ShowAdminPanel/ShowAdPanel';
import BookingDetails from './Components/BookingDetails/BookingDetails';
import Footer from './Components/Footer/Footer';
import LoginUser from './Components/Login/login';
import ShowPanel from './Components/ShowPanel/ShowPanel';
import AdminLogin from './Components/Admin/Admin_login/adminLogin';
import LoginAdmin from './Components/Admin/Admin_login/adminLogin';
import About from './Components/AboutUS/About';
import AdminFlightSchedule from './Components/Admin/FlightSchedule/FlightSchedule';
import BookTicket from './Components/BookTicket/BookTicket';
import ViewBooking from './Components/Admin/ViewBooking/ViewBooking'
import Book from './Components/BookingDetails/BookingDetails'
import ViewCustomers from './Components/Admin/ViewCustomers/ViewCustomers';
export default class App extends react.Component{
  

  render(){
    
  return (
    <div className="App">
      <Router>
            <div>
              {/* <Header/> */}
              <Navbar/>
              <Switch>
              <Route exact component={Home} path="/"/>
                <Route  component={Register} path="/Register" />
                <Route  component={Contact} path="/Contact" />
                <Route component={LoginUser} path="/Login"/>
                <Route component={FlightSchedule} path="/FlightSchedule"/>
                <Route component={BookTicket} path="/BookTicket"/>
                <Route component={TicketForm} path="/TicketBook"/>    
                
                <Route component={BookingDetails} path="/BookingDetails"/>                
                <Route component={ViewBooking} path="/Booking_Details"/>                
                <Route component={UpdateProfile} path="/UpdateProfile/:id"/>                
                <Route component={LoginAdmin} path="/adminlogin"></Route>
                <Route component={AddFlight} path="/addFlight"></Route>
                <Route component={About} path="/About"></Route>
                <Route component={AdminFlightSchedule} path="/AdminFlight"></Route>
                <Route component={ViewCustomers} path="/viewCustomers"></Route>
                
                
              </Switch>
            </div>
          </Router>
    </div>
  );
}
}