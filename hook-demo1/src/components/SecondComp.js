import React, { Component } from 'react';
import axios from 'axios';

export class SecondComp extends Component {
  state = {
    resource: []
  };
  async componentDidMount() {
    console.log('[SecondComp.js] component did mount');
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resource: response.data.length });
  }

  // we can use this should component update  to prevent repeated network calls, from componentDidUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Pre props = ${this.props.resource}`);
    console.log(`Next props = ${nextProps.resource}`);
    if (nextProps.resource !== this.props.resource) {
      return true;
    }
    return false;
  }

  // componentDidMount gets prevProps which can be used instead of shouldComponentUpdate
  async componentDidUpdate(prevPorps) {
    console.log('[SecondComp.js] component did update');
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resource: response.data.length });
  }
  render() {
    console.log('[SecondComp.js] rendered');
    return <div>The length is {this.state.resource}</div>;
  }
}

export default SecondComp;
