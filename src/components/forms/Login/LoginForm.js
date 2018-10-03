import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { loginFormFields } from './formFields';
import InputField from '../InputField';
import  * as authService from '../../../services/AuthService';
import {Button, Card, CardContent, Grid } from '@material-ui/core';
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
                <h6>Forgot Password?</h6>
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

export default reduxForm({
    form: 'loginForm',
    destroyOnUnmount: true
})(
    connect(null, { fetchUser })(LoginForm)
);