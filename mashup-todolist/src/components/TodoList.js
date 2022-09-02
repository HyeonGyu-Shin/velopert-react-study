import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoValueContext } from './TodoTemplate';

const TodoList = () => {
    const { todos } = useContext(TodoValueContext);
    return (
        <>
            {todos.map((v, i) => (
                <TodoItem key={v.id} text={v.text} id={v.id} />
            ))}
        </>
    );
};

export default TodoList;
