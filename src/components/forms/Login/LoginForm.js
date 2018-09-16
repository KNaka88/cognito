import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { loginFormFields } from './formFields';
import InputField from '../InputField';
import { login } from '../../../actions';

class LoginForm extends Component {

    constructor(props) {
        super(props);
    }
  
    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    {this.renderFields()}
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        );    
    }

    renderFields = () => {
        return loginFormFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    onSubmit(values) {
        this.props.login(values, () => this.props.login(values));
    }
}

export default reduxForm({
    form: 'loginForm'
})(
    connect(null, { login })(LoginForm)
);
