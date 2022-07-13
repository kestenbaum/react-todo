import React from 'react';
import style from './MySelect.module.css'
const MySelect = ({options, defaultValue, onChange, value}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            className={style.select}
        >
            <option value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;