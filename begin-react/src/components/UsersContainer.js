import React, { useRef, useMemo, useCallback, useReducer } from 'react';
import useReducerInputs from '../hooks/useReducerInputs';

import CreateUser from './CreateUser';
import UserList from './UserList';

const initialState = {
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        },
    ],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ONCREATE':
            return {
                users: [...state.users, action.user],
            };
        case 'ONREMOVE':
            return {
                users: state.users.filter((user) => user.id !== action.id),
            };
        case 'ONTOGGLE':
            return {
                users: state.users.map((user) =>
                    user.id === action.id
                        ? { ...user, active: !user.active }
                        : { ...user }
                ),
            };
        default:
            return state;
    }
};

const countActiveUsers = (users) => {
    console.log(`활성 사용자 수를 세는 중...`);
    return users.filter((user) => user.active).length;
};

const UsersContainer = () => {
    const [state, onChange, reset] = useReducerInputs({
        inputs: {
            username: '',
            email: '',
        },
    });
    const { username, email } = state.inputs;

    const [{ users }, dispatch] = useReducer(reducer, initialState);

    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
            active: false,
        };

        dispatch({ type: 'ONCREATE', user });

        reset();

        nextId.current += 1;
    }, [username, email, reset]);

    const onRemove = useCallback((id) => {
        dispatch({ type: 'ONREMOVE', id });
    }, []);

    const onToggle = useCallback((id) => {
        dispatch({ type: 'ONTOGGLE', id });
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <div>
            <CreateUser
                username={username}
                email={email}
                ß
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수 : {count}</div>
        </div>
    );
};

export default React.memo(UsersContainer);
// export default UsersContainer;
