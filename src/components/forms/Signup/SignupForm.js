import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signupFormFields, verifyCodeFields } from './formFields';
import InputField from '../InputField';
import {signup, verifyCode } from '../../../actions';

class SignupForm extends Component {

    constructor(props) {
        super(props); 
        this.state = { 
            verifyPageHidden: true
        };
        this.verifyCode = this.verifyCode.bind(this);
    }

    render() {
        const { handleSubmit } = this.props;
        if (this.state.verifyPageHidden) {
            return (
                <div>
                    <form onSubmit={handleSubmit(this.signup.bind(this))}>
                        {this.renderSignupForm()}
                        <button type="submit">
                            Signup
                        </button>
                    </form>
                </div>
            );        
        } else {
            return (
                <div>
                    <form onSubmit={handleSubmit(this.verifyCode.bind(this))}>
                        {this.renderVerifyForm()}
                        <button type="submit">
                            Verify
                        </button>
                    </form>
                </div>
            );
        }
    }

    renderSignupForm = () => {
        return signupFormFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    renderVerifyForm = () => {
        return verifyCodeFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    signup(values) {        
        this.props.signup(values, () => this.props.login(values.email, values.password));
        this.setState({ verifyPageHidden: false});
    }

    verifyCode(values) {
        this.props.verifyCode(values, () => this.props.login(values));
    }
}


export default reduxForm({
    form: 'signupForm'
})(
    connect(null, { signup, verifyCode })(SignupForm)
);
