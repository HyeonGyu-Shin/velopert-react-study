import React from 'react';
import classNames from 'classnames';
import './Button.scss';

const Button = ({
    children,
    size = 'medium',
    color = 'blue',
    outline,
    fullWidth,
    ...rest
}) => {
    return (
        <>
            <button
                className={classNames('Button', size, color, {
                    outline,
                    fullWidth,
                })}
                {...rest}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
