import React, { Component } from 'react';

function getNumbers() {
  // Get four unique random numbers

}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    attempts: []
  };

  onSubmitForm = () => {

  };

  onChangeInput = () => {

  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>Attempts: {this.state.attempts.length}</div>
        <ul>
          {['john', 'sam', 'soobin'].map((name) => {
            return (
              <li>{name}</li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
