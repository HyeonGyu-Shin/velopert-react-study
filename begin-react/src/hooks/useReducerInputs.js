import { useCallback, useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ONCHANGE':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value,
                },
            };
        case 'RESET':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    username: '',
                    email: '',
                },
            };
        default:
            return state;
    }
};

const useReducerInputs = (initialForm) => {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({ type: 'ONCHANGE', name, value });
    }, []);

    const reset = useCallback(() => {
        dispatch({ type: 'RESET' });
    }, []);

    return [state, onChange, reset];
};

export default useReducerInputs;
