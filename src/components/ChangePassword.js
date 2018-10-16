import React from 'react';
import ChangePasswordForm from './forms/ChangePassword/ChangePasswordForm';
import withAuthCheck from '../services/AuthCheck';
import { Link } from 'react-router-dom';

const ChangePassword =  () => {
    return (
        <div>
            <div>   
                <ChangePasswordForm/>
            </div>
            <Link to="/">
                Back to Dashboard
            </Link>            
        </div>
    );    
};

export default withAuthCheck(ChangePassword);

