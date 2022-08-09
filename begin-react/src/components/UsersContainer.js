import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

const countActiveUsers = (users) => {
    console.log(`활성 사용자 수를 세는 중...`);
    return users.filter(user => user.active).length;
}

const UsersContainer = () => {

    useEffect(() => {
        console.log(`userscontainer 생성!`);
    })
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });

    const [users, setUsers] = useState([
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
    ]);

    const { username, email } = inputs;

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }, [inputs]);

    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers(users => users.concat(user));

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback(id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users => users.filter(user => user.id !== id));
    }, []);

    const onToggle = useCallback(id => {
        setUsers(users =>
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <div>
            <CreateUser
                username={username}
                email={email}
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
