import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

export class DemoClass extends Component {


    // // state can also be initialized within constructor
    // constructor(props) {
    //     super(props);
    //     this.state = { location: null, errorMessage: '' };
    // }

    state = { location: null, errorMessage: '' };


    // this method runs when the component is visible on screen
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => { this.setState({ location: position.coords.latitude }) },
            err => {
                this.setState({ errorMessage: err.message })
            });
    }

    // runs when the component is updated
    componentDidUpdate(){
        console.log('component is updated');
    }

    // condition for the render, this is a custom function

    renderContent(){
        if (this.state.errorMessage && !this.state.location) {
            return <div>Error: {this.state.errorMessage}</div>
        } else if (!this.state.errorMessage && this.state.location) {
            return <SeasonDisplay lat={this.state.location} />
        } else {
            return <div>Loading... </div>
        }
    }

    render() {
        return (
            <div className = 'border red'>
            {this.renderContent()}
            </div> 
            ) 
    }
}

export default DemoClass
