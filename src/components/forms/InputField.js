import React from 'react';
import {Input} from '@material-ui/core'; 

export default ({ input, label, name, type }) => {
    const formMargin = {
        margin: '10px'
    }

    return (
        <div  style={formMargin}>
            <Input placeholder={label} name={name} type={type} {...input} />
        </div>
    );
};

