import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { verifyCodeFields } from './formFields';
import InputField from '../InputField';
import  * as authService from '../../../services/AuthService';

class VerifyForm extends Component {

    render() {
        const { handleSubmit } = this.props;
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

    renderVerifyForm = () => {
        return verifyCodeFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    verifyCode(values) {
        authService.verifyCode(values)
            .then(async () => {
                console.log("success");
            })
            .catch(err => console.log(err));
    }
}

export default reduxForm({
    form: 'signupForm',
    destroyOnUnmount: true
})(VerifyForm);
