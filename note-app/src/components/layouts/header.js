import React, { Component } from 'react'

export class header extends Component {
    render() {
        return (
            <div  style = {headerStyle}>
                <span>NOTE</span>
            </div>
        )
    }
} 

const headerStyle = {
    fontSize : '2rem',
    color: 'white',
    backgroundColor: 'black',
    padding: '4px 0px',
    textAlign: 'center'
}

export default header
