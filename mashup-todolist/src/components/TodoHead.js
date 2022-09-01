import React, { useContext } from 'react';
import { TodoValueContext } from './TodoTemplate';

const TodoHead = () => {
    const { todos } = useContext(TodoValueContext);
    const today = new Date();

    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const dayname = today.toLocaleDateString('ko-KR', { weekday: 'long' });
    return (
        <div>
            <h1>{dateString}</h1>
            <div className='day'>{dayname}</div>
            <div>할 일 {todos.length}개 남음</div>
        </div>
    );
};

export default TodoHead;
