import React, { Component } from 'react'
import ControlPanel from '../Control_panel/ControlPanel'

export default class ShowPanel extends Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
      }
    //   toggleHidden () {
       
    //   }
      componentDidMount(){
        if(localStorage.myData==='undefined' || localStorage.myData==='null'){
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
                
        {this.state.isHidden && <ControlPanel />}
            </div>
        )
    }
}
