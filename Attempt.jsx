import React, { Component } from 'react';

class Attempt extends Component {
  render() {
    const person = this.props.person;

    return (
      <li>
        <div>{this.props.attemptInfo.attempt}</div>
        <div>{this.props.attemptInfo.result}</div>
      </li>
    );
  };
}

export default Attempt;