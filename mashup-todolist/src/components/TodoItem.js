import React, { useCallback, useContext } from 'react';

import { MdDelete, MdDone } from 'react-icons/md';
import { TodoActionContext, TodoValueContext } from './TodoTemplate';

const TodoItem = ({ text, id }) => {
    const value = useContext(TodoValueContext);
    const actions = useContext(TodoActionContext);

    const { todos, nextRef } = value;

    const deleteTodo = useCallback(() => {
        actions.setTodos((todos) => {
            return todos.filter((v, i) => v.id !== id);
        });
    }, [actions, id]);

    return (
        <div>
            <div>
                <MdDone />
            </div>
            <div>{text}</div>
            <div onClick={deleteTodo}>
                <MdDelete />
            </div>
        </div>
    );
};

export default TodoItem;
