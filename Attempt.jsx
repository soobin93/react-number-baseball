import React from 'react';

const Attempt = ({ attemptInfo }) => {
    return (
        <li>
            <div>{attemptInfo.attempt}</div>
            <div>{attemptInfo.result}</div>
        </li>
    );
};

export default Attempt;