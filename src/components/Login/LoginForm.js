import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import loginFormFields from './loginFormFields';
import LoginField from './LoginField';
import { login } from '../../actions';

class LoginForm extends Component {

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
        return loginFormFields.map( ({label, name}) => {
            return <Field key={name} component={LoginField} type="text" label={label} name={name}/>
        });
    };

    onSubmit(values) {
        this.props.login(values, () => this.props.login(values.email, values.password));
    }

}

export default reduxForm({
    form: 'loginForm'
})(
    connect(null, { login })(LoginForm)
);
