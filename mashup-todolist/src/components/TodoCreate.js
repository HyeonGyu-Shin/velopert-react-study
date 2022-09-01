import React, { useCallback, useContext, useEffect, useState } from 'react';
import { TodoActionContext } from './TodoTemplate';
import { TodoValueContext } from './TodoTemplate';

const TodoCreate = () => {
    useEffect(() => {
        console.log('TodoCreate 리렌더링 되었다!');
    });

    const value = useContext(TodoValueContext);
    const actions = useContext(TodoActionContext);

    const [text, setText] = useState('');
    const { todos, nextRef } = value;

    const AddTodo = (e) => {
        e.preventDefault();

        const todo = {
            id: nextRef.current,
            text,
        };

        actions.setTodos((todos) => {
            return [...todos, todo];
        });

        nextRef.current++;

        setText(() => '');
    };

    const onChangeText = useCallback(
        (e) => {
            setText(e.target.value);
        },
        [setText]
    );

    return (
        <div>
            <form>
                <input
                    placeholder='할 일을 입력 해주세요'
                    onChange={onChangeText}
                    value={text}
                />
                <button onClick={AddTodo}>추가!</button>
            </form>
            <button>+</button>
        </div>
    );
};

export default TodoCreate;
