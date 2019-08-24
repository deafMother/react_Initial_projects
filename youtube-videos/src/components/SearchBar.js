import React, { Component } from 'react'


export class SearchBar extends Component {

    state = {term:''}
    onInputChange = (event)=>{
        this.setState({term:event.target.value});
    };

    onFormSubmit = (event)=>{
        event.preventDefault();

        // call a callback function bassed by app component
        this.props.onFormSubmit(this.state.term);        

    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="filed">
                        <label>Video Search</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar





