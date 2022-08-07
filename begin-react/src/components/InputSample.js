import React, { useState, useRef } from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const nameInput = useRef();

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = (e) => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input
                placeholder='이름'
                name='name'
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                placeholder='닉네임'
                name='nickname'
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name ? name : '이름'} {nickname ? `(${nickname})` : '(닉네임)'}
            </div>
        </div>
    );
};

export default InputSample;
