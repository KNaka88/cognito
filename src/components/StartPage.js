import React, { Component } from 'react';
import LoginForm from './forms/Login/LoginForm';
import SignupForm from './forms/Signup/SignupForm';
import VerifyForm from './forms/Verify/VerifyForm';

class StartPage extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            isSignupFormVisible: true
        };
    }

    hideSignupForm() {
        this.setState({
            isSignupFormVisible : false
        });
    }

    render() {
        if (this.state.isSignupFormVisible) {
            return <SignupForm hideSignupForm={this.hideSignupForm.bind(this)}></SignupForm>;            
        } else {
            return <VerifyForm></VerifyForm>;
        }
    }
};

export default StartPage;