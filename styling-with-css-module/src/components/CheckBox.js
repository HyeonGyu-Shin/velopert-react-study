import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';

const CheckBox = ({ children, checked, ...rest }) => {
    return (
        <div className={styles.checkbox}>
            <label>
                <input type='checkbox' checked={checked} {...rest} />
                <div className={styles.icon}>
                    {checked ? (
                        <MdCheckBox className={styles.checked} />
                    ) : (
                        <MdCheckBoxOutlineBlank />
                    )}
                </div>
            </label>
            <span>{children}</span>
            <div className={`${styles.one} ${styles.two}`}>hello</div>
        </div>
    );
};

export default CheckBox;
