import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import formFields from './formFields';
import LoginField from './LoginField';

class LoginForm extends Component {

    renderFields() {
        return formFields.map( ({label, name}) => {
            return <Field key={name} component={LoginField} type="text" label={label} name={name}/>
        });
    }

    render() {
        return (
            <div>
                <form>
                    {this.renderFields()}
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'loginForm',
    destroyOnUnmount: true 
})(LoginForm);