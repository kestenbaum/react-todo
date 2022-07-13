import React from 'react';
import style from './MyButton.module.css'
const MyButton = ({...props}) => {
    return (
        <button {...props} className={style.btn}>
            {props.children}
        </button>
    );
};

export default MyButton;