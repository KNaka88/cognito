import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { signupFormFields } from './formFields';
import InputField from '../InputField';
import  * as authService from '../../../services/AuthService';
import {Button, Card, CardContent, Grid } from '@material-ui/core';
import * as formValidation from '../../../services/FormValidation';
import VerifyForm from '../Verify/VerifyForm';

class SignupForm extends Component {
    centerWrapper = {
        display: 'flex',
        justifyContent: 'center'
    }

    constructor(props) {
        super(props);        
        this.state = { 
            errorMessage: '',
            isVerificationCodeSent: false,
        };

    }

    render() {
        const { handleSubmit } = this.props;
        
        if (this.state.isVerificationCodeSent) {
            return <VerifyForm/>
        } else {
            return (
                <div>
                    <Grid container justify="center">
                        <Card>
                            <CardContent>
                                <form onSubmit={handleSubmit(this.signup.bind(this))}>
                                    {this.renderSignupForm()}
                                    <div style={this.centerWrapper}>
                                        <Button type="submit" variant="raised" color="primary">
                                            Signup
                                        </Button>
                                    </div>
                                    {this.state.errorMessage ? this.state.errorMessage : ""}
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </div>
            );        
        }
    }

    renderSignupForm = () => {
        return signupFormFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    signup(values) {      
        this.resetMessageVisibility();
        
        authService.signup(values)
            .then( (data) => {
                this.setState({isVerificationCodeSent : true});
            })
            .catch((error) => {
                this.setState({errorMessage : error.message});
            });
    }

    resetMessageVisibility() {
        this.setState({
            errorMessage: ''
        });
    }
}

function validate(values) {
    const errors = {};
  
    errors.email = formValidation.emailValidation(values.email || '');
    errors.password = formValidation.passwordValidation(values.password || '');

    signupFormFields.forEach(({ name }) => {
      if (!values[name]) {
        errors[name] = 'Required field';
      }
    });
  
    return errors;
  }


export default reduxForm({
    validate,
    form: 'signupForm',
    destroyOnUnmount: false
})(SignupForm);
