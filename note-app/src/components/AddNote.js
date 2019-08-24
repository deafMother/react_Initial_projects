import React, { Component } from 'react'

export class AddNote extends Component {
    state = {
        title:''
    }

    onChange = (e)=>{
        this.setState({title: e.target.value});
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addNote(this.state.title);
        this.setState({title:""});
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit} style={{ display: 'flex' }}>
                <input type='text'
                    placeholder='Add Note..'
                    stlye={{
                        flex:'10'
                    }}
                    value  = {this.state.title}
                    onChange = {this.onChange}
                    >
                </input>

                <input type='submit'
                value ='ADD NEW'
                className = 'btn'
                style = {{flex:'1'}}
                >
                
                </input>



            </form>
        )
    }
}

export default AddNote

