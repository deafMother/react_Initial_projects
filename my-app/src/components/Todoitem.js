import React, { Component } from 'react'
import PropType from 'prop-types'

export class Todoitem extends Component {

    getStyle = ()=>{
       return{
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed?
           'line-through':'none'
       }

    }


    render() {

        // pull out value from this.props.todo , detructuring
        const { id, title}  = this.props.todo;

        return (
            <div style= {this.getStyle()}>
                <p>
                <input type='checkbox' onChange = {this.props.markComplete.bind(this, id)} />
                {' '} 
                {title}{' '}
                <button style = {btnStyle} onClick= {this.props.delete.bind(this,id)}>XX</button>
                </p>
            </div>
        )
    }
}

// in this case the prop os of type object ie each todo
Todoitem.propTypes = {
    todo: PropType.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}

export default Todoitem







