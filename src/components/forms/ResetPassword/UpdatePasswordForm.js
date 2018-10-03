import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { newPasswordFormFields } from './formFields';
import InputField from '../InputField';
import  * as authService from '../../../services/AuthService';
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
            errorMessageVisible: false
        };
    }
  
    render() {
        const { handleSubmit } = this.props;

        const successMessage =  <p>Successfully reset Password</p>;
        const errorMessage = <div>Error has occurred</div>;

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
                                {this.state.errorMessageVisible ? errorMessage : ""}
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

        // TODO: check if newPassword & confirmPassword matches before calling authService
        authService.updatePassword(values) 
            .then((success) => {
                this.setState({successMessageVisible : true});
            })
            .catch(err => {
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
    destroyOnUnmount: true
})(UpdatePasswordForm);