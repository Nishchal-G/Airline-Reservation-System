import React, { Component } from  'react'
import '../Contact_us/Contact.css'
import Footer from '../Footer/Footer'
class Contact extends Component{
    
    render()
    {
        return(
            <div class="contact">
                <div>
                <div class="heading" style={{float:'left',marginLeft:'120px',marginTop:'20px'}}>
                    <h2>Contact Us</h2>
                </div>
                <br/>
                <br/>
                
  <div id="map-container-google-1" class="z-depth-1-half map-container" style={{height: '200px'}} >
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.4815785473943!2d77.08941921430755!3d13.320292210736186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02ea2e47be715%3A0xd11867fcac2dd566!2sSri%20Siddhartha%20Institute%20Of%20Technology!5e0!3m2!1sen!2snp!4v1607426207378!5m2!1sen!2snp" frameborder="0"></iframe>
</div>
<br></br>
<div class="info">
    <h5>Head Office :</h5>
    <p>12, 4th Main JP Nagar</p>
    <p>Banglore</p>
    <p>Karnataka</p>
    <br></br>
    <p>Telephone:  +68512154, +64454545</p>
    <p>Email: customercare@rwenzoriairline.com</p>
</div>

</div>  
         </div>
        )
    }
}
export default Contact;