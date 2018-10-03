import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { resetPasswordFormFields } from './formFields';
import InputField from '../InputField';
import  * as authService from '../../../services/AuthService';
import {Button, Card, CardContent, Grid } from '@material-ui/core';
import UpdatePasswordForm from './UpdatePasswordForm';

class ResetPasswordForm extends Component {
    centerWrapper = {
        display: 'flex',
        justifyContent: 'center'
    }

    constructor(props) {
        super(props);
        this.state = { 
            errorMessageVisible: false,
            isVerificationCodeSent: false
        };
    }
  
    render() {
        const { handleSubmit } = this.props;
        const errorMessage = <div>Error has occurred</div>;

        if (this.state.isVerificationCodeSent) {
            return <UpdatePasswordForm/>
        } else {
            return (
                <div>
                    <Grid container justify="center">
                        <Card>
                            <CardContent>
                                <form onSubmit={handleSubmit(this.resetPassword.bind(this))}>
                                    {this.renderFields()}
                                    <div style={this.centerWrapper}>
                                        <Button type="submit" variant="raised" color="primary">
                                            Reset Password
                                        </Button>
                                    </div>
                                    {this.state.errorMessageVisible ? errorMessage : ""}
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </div>
            );    
        }
    }

    renderFields = () => {
        return resetPasswordFormFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    resetPassword(values) {
        this.resetMessageVisibility();

        authService.resetPassword(values) 
            .then(() => {
                this.setState({isVerificationCodeSent : true});
            })
            .catch(() => {
                this.setState({errorMessageVisible : true});
            });
    };


    resetMessageVisibility() {
        this.setState({
            successMessageVisible: false, 
            errorMessageVisible: false
        });
    }
}

export default reduxForm({
    form: 'resetPasswordForm',
    destroyOnUnmount: false
})(ResetPasswordForm);