import React, { Component } from 'react';
import io from 'socket.io-client/dist/socket.io.js';

import Sling from './Sling.jsx';

class SlingIndex extends Component {
  state = { 
    socket: null,
   }

  componentWillMount() {
    console.log('inside of componentWillMount of SlingIndex, doing a socket connection')
    this.socket = io('http://localhost:4155', {
      query: {
        roomId: this.props.location.pathname.slice(1)
      }
    });

    this.setState({ socket: this.socket });
  }

  render() {
    if (this.props.location.state) {
      console.log('this is the props.location.state', this.props.location.state)
      return (
        <Sling socket={this.state.socket} challenge={this.props.location.state.challenge}/>
      );
    } else {
      console.log('this is no props.lcation.state')
      return (
        <Sling socket={this.state.socket} challenge={{}}/>
      );
    }
  }
}

export default SlingIndex;