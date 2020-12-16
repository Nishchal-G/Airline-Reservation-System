import React, { Component } from 'react'
import AdminPanel from '../AdminPanel/AdminPanel'

export default class ShowAdPanel extends Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
      }
      
      componentDidMount(){
        if(localStorage.AdminData==='undefined' || localStorage.AdminData==='null'){
            this.setState({
              isHidden: false
            })
        }
        else
            this.setState({
                isHidden:true
            })
      }
    render() {
        return (
            <div onChange={this.componentDidMount}>
                
        {this.state.isHidden && <AdminPanel />}
            </div>
        )
    }
}
