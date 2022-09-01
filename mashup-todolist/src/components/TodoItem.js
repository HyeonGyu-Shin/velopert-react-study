import React from 'react';

import { MdDelete, MdDone } from 'react-icons/md';

const TodoItem = ({ text }) => {
    return (
        <div>
            <div>
                <MdDone />
            </div>
            <div>{text}</div>
            <div>
                <MdDelete />
            </div>
        </div>
    );
};

export default TodoItem;
