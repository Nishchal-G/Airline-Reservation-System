import React, { Component } from  'react'
import '../Header/Header.css'
class Header extends Component{
    
    render()
    {
        return(
            <div className="header_top">
                <div className="header_text">
                <h1>Rwenzori Airline</h1>
                <p>Airline Travels at its Best</p>
                </div>
            </div>
        )
    }
}
export default Header;