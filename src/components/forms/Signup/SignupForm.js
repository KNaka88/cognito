import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { signupFormFields } from './formFields';
import InputField from '../InputField';
import  * as authService from '../../../services/AuthService';

class SignupForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { handleSubmit } = this.props;
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
    }

    renderSignupForm = () => {
        return signupFormFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    signup(values) {      
        authService.signup(values)
            .then( (data) => {
                this.props.hideSignupForm();
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default reduxForm({
    form: 'signupForm',
    destroyOnUnmount: false
})(SignupForm);
