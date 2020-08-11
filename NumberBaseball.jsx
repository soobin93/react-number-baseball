import React, { useState, memo } from 'react';
import Attempt from './Attempt';

function getNumbers() {
    // Get four unique random numbers
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];

    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen) ;
    }

    return array;
}

const NumberBaseball = memo(() => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [attempts, setAttempts] = useState([]);

    const onSubmitForm = (event) => {

        event.preventDefault();

        if (value === answer.join(''))
        {
            setResult('Home Run!');
            setAttempts((previousAttempts) => {
                return [...previousAttempts, { attempt: value, result: 'Home Run!'}];
            }); // 옛날 Value를 새로운 Value로 바꿔줄 경우에는 함수형으로 해야한다

            alert('The game is restarting!');

            setValue('');
            setAnswer(getNumbers());
            setAttempts([]);
        }
        else {
            const answerArray = value.split('').map((value) => parseInt(value));

            let strike = 0;
            let ball = 0;

            if (attempts.length >= 9) { // All attempts has been used

                setResult(`You have used all of your attempts! The answer was ${this.state.answer.join(',')}!`);

                alert('The game is restarting!');

                setValue('');
                setAnswer(getNumbers());
                setAttempts([]);
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i])
                    {
                        strike += 1;
                    }
                    else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }

                setAttempts((previousAttempts) => {
                    return [...previousAttempts, { attempt: value, result: `Strike: ${strike}, Ball: ${ball}` }];
                });
                setValue('');
            }
        }
    };

    const onChangeInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>Attempts: {attempts.length}</div>
            <ul>
                {attempts.map((value, index) => {
                    return (
                        <Attempt key={`attempt-${index}`} attemptInfo={value} index={index}/>
                    );
                })}
            </ul>
        </>
    );
});

export default NumberBaseball;
