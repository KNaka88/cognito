import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SignupForm from './forms/Signup/SignupForm';

class StartPage extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            isSignupFormVisible: true
        };
    }
    render() {
        return (
            <div>
                <h1> Three Things </h1>
                <SignupForm></SignupForm>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        );
    }
};

export default StartPage;