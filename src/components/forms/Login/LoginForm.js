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

    showMessage() {
        if (this.props.authError) {
            return (
                <h5>{this.props.authError}</h5>
            );
        }
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
                    {this.showMessage()}
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

const mapStateToProps = (state) => {
    return { authError: state.authError }
};

export default reduxForm({
    form: 'loginForm'
})(
    connect(mapStateToProps, { login })(LoginForm)
);
