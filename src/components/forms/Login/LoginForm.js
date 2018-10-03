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
    }

    // showErrorMessage() {
    //     if (this.props.authError) {
    //         return (
    //             <h5>{this.props.authError}</h5>
    //         );
    //     }
    // }
  
    render() {
        const { handleSubmit } = this.props;
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
                                {/* {this.showMessage()} */}
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
        authService.login(values) 
            .then((user) => {
                this.props.fetchUser();                
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export default reduxForm({
    form: 'loginForm',
    destroyOnUnmount: true
})(
    connect(null, { fetchUser })(LoginForm)
);