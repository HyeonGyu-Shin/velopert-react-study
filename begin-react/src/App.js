import React from 'react';
import UsersContainer from './components/UsersContainer';

const App = () => {
    return (
        <div>
            <UsersContainer></UsersContainer>
        </div>
    );
};

export default React.memo(App);
