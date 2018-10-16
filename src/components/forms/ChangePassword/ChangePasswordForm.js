import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { changePasswordFormFields } from './formFields';
import InputField from '../InputField';
import  * as authService from '../../../services/AuthService';
import {Button, Card, CardContent, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

class ChangePasswordForm extends Component {
    centerWrapper = {
        display: 'flex',
        justifyContent: 'center'
    }

    constructor(props) {
        super(props);
        this.state = { 
            errorMessage: '',
            successMessage: ''
        };
    }
  
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <Grid container justify="center">
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit(this.changePassword.bind(this))}>
                                {this.renderFields()}
                                <div style={this.centerWrapper}>
                                    <Button type="submit" variant="raised" color="primary">
                                        Change Password
                                    </Button>
                                </div>
                                {this.state.successMessage ? this.state.successMessage : ""}
                                {this.state.errorMessage ? this.state.errorMessage : ""}
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );    
    }

    renderFields = () => {
        return changePasswordFormFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    changePassword(values) {
        this.resetMessageVisibility();   
        const { auth } = this.props;

        if (auth) {
            authService.changePassword(auth.user, values) 
                .then(() => {
                    this.setState({successMessage : 'Password update success!'});
                })
                .catch((error) => {
                    this.setState({errorMessage : error.message});
                });    
        }
    };


    resetMessageVisibility() {
        this.setState({
            successMessage: '', 
            errorMessage: ''
        });
    }
}

function mapStateToProps({auth}) {
    return { auth };            
}

ChangePasswordForm = connect(mapStateToProps, null)(ChangePasswordForm);

export default 
    reduxForm({
        form: 'changePasswordForm', 
        destroyOnUnmount: true
    })(ChangePasswordForm);