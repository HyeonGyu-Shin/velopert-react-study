import React from 'react';
import Counter from './components/Counter';

const App = () => {
    return (
        <div>
            <Counter></Counter>
        </div>
    );
};

export default React.memo(App);
