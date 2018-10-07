import React, { Component } from 'react';
import SignupForm from './forms/Signup/SignupForm';
import LoginForm from './forms/Login/LoginForm';

class WelcomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div>
                    <h3>Signup</h3>
                    <SignupForm/>
                </div>
                <div>
                    <h3>Login</h3>
                    <LoginForm/>
                </div>
            </div>
        );
    }
};

export default WelcomePage;