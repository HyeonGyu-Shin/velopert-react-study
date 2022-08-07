import React, { useState } from 'react';
import Counter from './Counter';

const CounterContainer = () => {
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount((count) => count + 1);
    };

    const onDecrease = () => {
        setCount((count) => count - 1);
    };

    return (
        <div>
            <Counter
                count={count}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
            ></Counter>
        </div>
    );
};

export default CounterContainer;
