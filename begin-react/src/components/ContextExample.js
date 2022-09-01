import React, { createContext, useContext, useMemo, useState } from 'react';

const CounterValueContext = createContext();
const CounterActionsContext = createContext();

const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(1);
    const actions = useMemo(
        () => ({
            increase: () => setCounter((prev) => prev + 1),
            decrease: () => setCounter((prev) => prev - 1),
        }),
        []
    );

    return (
        <CounterActionsContext.Provider value={actions}>
            <CounterValueContext.Provider value={counter}>
                {children}
            </CounterValueContext.Provider>
        </CounterActionsContext.Provider>
    );
};

function useCounterValue() {
    const value = useContext(CounterValueContext);
    if (value === undefined) {
        throw new Error(
            'useCounterState should be used within CounterProvider'
        );
    }
    return value;
}

function useCounterActions() {
    const value = useContext(CounterActionsContext);
    if (value === undefined) {
        throw new Error(
            'useCounterActions should be used within CounterProvider'
        );
    }
    return value;
}

const ContextExample = () => {
    return (
        <CounterProvider>
            <div>
                <Value></Value>
                <Buttons></Buttons>
            </div>
        </CounterProvider>
    );
};

function Value() {
    const counter = useCounterValue();
    console.log('value');
    return <h1>{counter}</h1>;
}
function Buttons() {
    console.log('button');
    const actions = useCounterActions();

    return (
        <div>
            <button onClick={actions.increase}>+</button>
            <button onClick={actions.decrease}>-</button>
        </div>
    );
}

export default ContextExample;
