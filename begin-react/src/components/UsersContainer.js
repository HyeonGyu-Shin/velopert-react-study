import React, { useState, useRef } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

const UsersContainer = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
        },
    ]);

    const { username, email } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const nextId = useRef(4);

    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        setUsers([...users, user]);
        setInputs({
            username: '',
            email: '',
        });
        nextId.current += 1;
    };

    return (
        <div>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} />
        </div>
    );
};

export default UsersContainer;
