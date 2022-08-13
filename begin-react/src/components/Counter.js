import React, { useState } from 'react';

const Counter = () => {
    const [number, setnumber] = useState(0);

    const onIncrease = () => {
        setnumber((number) => number + 1);
    };

    const onDecrease = () => {
        setnumber((number) => number - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}> + 1</button>
            <button onClick={onDecrease}> - 1</button>
        </div>
    );
};

export default Counter;
