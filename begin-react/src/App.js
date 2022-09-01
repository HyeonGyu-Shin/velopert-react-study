import React from 'react';
import ItemContextExample from './components/ItemContextExample';
// import UsersContainer from './components/UsersContainer';

const App = () => {
    return (
        <div>
            {/* <UsersContainer></UsersContainer> */}
            <ItemContextExample />
        </div>
    );
};

export default React.memo(App);
