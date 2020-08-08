import React, {Component} from 'react';
import Attempt from './Attempt';

function getNumbers() {
    // Get four unique random numbers
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];

    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }

    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        attempts: [] // don't use push here
    };

    onSubmitForm = (e) => {
        e.preventDefault();

        if (this.state.value === this.state.answer.join(''))
        {
            this.setState({
                result: 'Home Run!',
                attempts: [...this.state.attempts, { attempt: this.state.value, result: 'Home Run!' }]
            });

            alert('The game is restarting!');

            this.setState({
                value: '',
                answer: getNumbers(),
                attempts: []
            });
        }
        else {
            const answerArray = this.state.value.split('').map((value) => parseInt(value));

            let strike = 0;
            let ball = 0;

            if (this.state.attempts.length >= 9) { // All attempts has been used
                this.setState({
                    result: `You have used all of your attempts! The answer was ${this.state.answer.join(',')}!`,
                });

                alert('The game is restarting!');

                this.setState({
                    value: '',
                    answer: getNumbers(),
                    attempts: []
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }

                this.setState({
                    attempts: [
                        ...this.state.attempts,
                        { attempt: this.state.value, result: `Strike: ${strike}, Ball: ${ball}`}
                    ],
                    value: ''
                });
            }
        }
    };

    onChangeInput = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>Attempts: {this.state.attempts.length}</div>
                <ul>
                    {this.state.attempts.map((value, index) => {
                        return (
                            <Attempt key={`attempt-${index}`} attemptInfo={value} index={index}/>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;
