import React, { createContext, useMemo, useState, useRef } from 'react';
import './TodoTemplate.scss';

import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

export const TodoValueContext = createContext();
export const TodoActionContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, text: '첫 번째 할 일 ' },
        { id: 2, text: '두 번째 할 일' },
        { id: 3, text: '세 번째 할 일' },
    ]);

    const actions = useMemo(
        () => ({
            setTodos,
        }),
        [setTodos]
    );

    const nextRef = useRef(4);

    const value = {
        todos,
        nextRef,
    };

    return (
        <TodoActionContext.Provider value={actions}>
            <TodoValueContext.Provider value={value}>
                {children}
            </TodoValueContext.Provider>
        </TodoActionContext.Provider>
    );
};
const TodoTemplate = ({ children }) => {
    return (
        <TodoProvider>
            <TodoHead></TodoHead>
            <TodoList></TodoList>
            <TodoCreate></TodoCreate>
        </TodoProvider>
    );
};

export default TodoTemplate;
