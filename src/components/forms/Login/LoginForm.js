import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { loginFormFields } from './formFields';
import InputField from '../InputField';
import  * as authService from '../../../services/AuthService';
import * as formValidation from '../../../services/FormValidation';
import {Button, Card, CardContent, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import { fetchUser } from '../../../actions';


class LoginForm extends Component {
    centerWrapper = {
        display: 'flex',
        justifyContent: 'center'
    }

    constructor(props) {
        super(props);
        this.state = { 
            errorMessageVisible: false
        };
    }
  
    render() {
        const { handleSubmit } = this.props;
        const errorMessage = 
            <div>
                <p>Email or Password is incorrect</p>
                <Link to="/resetPassword">Forgot Password?</Link>
            </div>;

        return (
            <div>
                <Grid container justify="center">
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit(this.login.bind(this))}>
                                {this.renderFields()}
                                <div style={this.centerWrapper}>
                                    <Button type="submit" variant="raised" color="primary">
                                        Login
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

    renderFields = () => {
        return loginFormFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    login(values) {
        this.setState({errorMessage: ""});

        authService.login(values) 
            .then(() => {
                this.props.fetchUser();                
            })
            .catch(err => {
                this.setState({errorMessageVisible : true});
            });
    };
}

function validate(values) {
    const errors = {};

    errors.email = formValidation.emailValidation(values.email || '');

    loginFormFields.forEach(({ name }) => {
      if (!values[name]) {
        errors[name] = 'Required field';
      }
    });
  
    return errors;
}

function mapStateToProps({auth}) {
    return { auth };            
}

export default reduxForm({
    validate,
    form: 'loginForm',
    destroyOnUnmount: true
})(
    connect(mapStateToProps, {fetchUser})(LoginForm)
);