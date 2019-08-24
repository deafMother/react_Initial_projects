import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class noteItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px grey dotted',
            textDecoration: this.props.NoteItem.completed ? 'line-through' : 'none'
        }

    }
    

    

    render() {
        return (
            <div style={this.getStyle()}>
                <input type = 'checkbox' onChange = {this.props.markComplete.bind(this,this.props.NoteItem.id)}/>
                {this.props.NoteItem.title}
                <button style={btnStyle} onClick={this.props.deleteNote.bind(this, this.props.NoteItem.id)}>x</button>
            </div>
        )
    }
}

noteItem.propTypes = {
    NoteItem: PropTypes.object.isRequired
}

let fontS = {
    fontSize: '2rem',
    backgroundColor: 'grey'
}
let btnStyle = {
    border: 'none',
    backgroundColor: 'red',
    color: 'white',
    padding: '5px 5px',
    borderRadius: '5px',
    float: 'right',
    verticleAlign : 'center'
}

export default noteItem
