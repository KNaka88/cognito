import React from 'react';
import LoginForm from './forms/Login/LoginForm';
import SignupForm from './forms/Signup/SignupForm';

const StartPage = () => {
    return (
        <div>
            <h1>Three Things</h1>
            <LoginForm/>



            <h3>Signup</h3>
            <SignupForm/>
        </div>
    );
};

export default StartPage;