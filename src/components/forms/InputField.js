import React from 'react';

export default ({ input, label, name, type }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} {...input}></input>
        </div>
    );
};