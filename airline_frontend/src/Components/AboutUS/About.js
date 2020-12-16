import React, { Component } from 'react'
import '../AboutUS/About.css'
export default class About extends Component {
    render() {
        return (
            <div style={{textAlign:'center',marginTop:'40px',marginBottom:'20px'}}>
                <img style={{marginBottom:'20px'}} src="https://cdn.pixabay.com/photo/2019/09/05/15/25/airbus-4454338_1280.jpg" width="300px" height="200px"/>
                <div className="about" style={{marginLeft:'180px'}}>
                <div class="card">
  <div className="card-body">
    <h3 className="card-title">Rwenzori Airlines</h3>
    <h6 className="card-subtitle mb-2 text-muted">Airline Travels at its Best</h6>
    <p className="card-text">Rwenzori Airline is the flag carrier airline of India, headquartered at New Delhi. It is owned by Air India Limited, a government-owned enterprise, and operates a fleet of Airbus and Boeing aircraft serving 102 domestic and international destinations.</p>
  </div>
</div>
</div>
            </div>
        )
    }
}
