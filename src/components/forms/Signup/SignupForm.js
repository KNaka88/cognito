import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { signupFormFields } from './formFields';
import InputField from '../InputField';
import  * as authService from '../../../services/AuthService';
import {Button, Card, CardContent, Grid, FormGroup } from '@material-ui/core';

class SignupForm extends Component {
    centerWrapper = {
        display: 'flex',
        justifyContent: 'center'
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { handleSubmit } = this.props;

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
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );        
    }

    renderSignupForm = () => {
        return signupFormFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    signup(values) {      
        authService.signup(values)
            .then( (data) => {
                this.props.hideSignupForm();
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default reduxForm({
    form: 'signupForm',
    destroyOnUnmount: false
})(SignupForm);
