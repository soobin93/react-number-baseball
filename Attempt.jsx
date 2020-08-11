import React, { memo } from 'react';

const Attempt = memo(({ attemptInfo }) => {
    return (
        <li>
            <div>{attemptInfo.attempt}</div>
            <div>{attemptInfo.result}</div>
        </li>
    );
});

export default Attempt;