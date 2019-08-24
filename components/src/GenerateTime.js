// this component generates the current time and renderes it to the screen

import React, { Component } from 'react'

export class GenerateTime extends Component {

    state = {
        time: new Date().toLocaleTimeString()
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000);

    }

    render() {
        return (
            <div>
                Time is : {this.state.time}        
            </div>
        )
    }
}

export default GenerateTime

