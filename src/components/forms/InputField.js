import React from 'react';
import {Input} from '@material-ui/core'; 

export default ({ input, label, name, type, meta: {error, touched} }) => {
    const formMargin = {
        margin: '10px'
    }

    return (
        <div  style={formMargin}>
            <Input placeholder={label} name={name} type={type} {...input} />
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};

