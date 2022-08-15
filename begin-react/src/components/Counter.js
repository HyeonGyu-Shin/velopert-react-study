import React, { useReducer } from 'react';

const ONINCREASE = 'ONINCREASE';
const ONDECREASE = 'ONINDECREASE';

const reducer = (state, action) => {
    switch (action.type) {
        case ONINCREASE:
            return {
                ...state,
                number: state.number + 1,
            };
        case ONDECREASE:
            return {
                ...state,
                number: state.number - 1,
            };
        default:
            return state;
    }
};

const initialState = {
    number: 0,
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { number } = state;

    const onIncrease = () => {
        dispatch({ type: ONINCREASE });
    };

    const onDecrease = () => {
        dispatch({ type: ONDECREASE });
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
