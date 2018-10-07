import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { newPasswordFormFields } from './formFields';
import InputField from '../InputField';
import  * as authService from '../../../services/AuthService';
import * as formValidation from '../../../services/FormValidation';
import {Button, Card, CardContent, Grid } from '@material-ui/core';

class UpdatePasswordForm extends Component {
    centerWrapper = {
        display: 'flex',
        justifyContent: 'center'
    }

    constructor(props) {
        super(props);
        this.state = { 
            successMessageVisible: false,
            errorMessage: ''
        };
    }
  
    render() {
        const { handleSubmit } = this.props;

        const successMessage =  <p>Successfully reset Password</p>;

        return (
            <div>
                <Grid container justify="center">
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit(this.updatePassword.bind(this))}>
                                {this.renderFields()}
                                <div style={this.centerWrapper}>
                                    <Button type="submit" variant="raised" color="primary">
                                        Submit
                                    </Button>
                                </div>
                                {this.state.errorMessage ? this.state.errorMessage : ""}
                                {this.state.successMessageVisible ? successMessage : ""}
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );    
    }

    renderFields = () => {
        return newPasswordFormFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    updatePassword(values) {
        this.resetMessageVisibility();

        authService.updatePassword(values) 
        .then((success) => {
            this.setState({successMessageVisible : true});
        })
        .catch(err => {
            this.setState({errorMessage : err.message});
        });
    };


    resetMessageVisibility() {
        this.setState({
            successMessageVisible: false, 
            errorMessage: ''
        });
    }
}


function validate(values) {
    const errors = {};
  
    errors.newPassword = formValidation.passwordValidation(values.newPassword || '');
    errors.confirmNewPassword = formValidation.passwordMatchValidation(values.newPassword, values.confirmNewPassword);

    newPasswordFormFields.forEach(({ name }) => {
      if (!values[name]) {
        errors[name] = 'Required field';
      }
    });
  
    return errors;
  }


export default reduxForm({
    validate,
    form: 'resetPasswordForm',
    destroyOnUnmount: true
})(UpdatePasswordForm);