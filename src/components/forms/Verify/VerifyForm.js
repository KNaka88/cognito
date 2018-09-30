import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { verifyCodeFields } from './formFields';
import InputField from '../InputField';
import {Button, Grid, Card, CardContent} from '@material-ui/core';
import  * as authService from '../../../services/AuthService';

class VerifyForm extends Component {

    centerWrapper = {
        display: 'flex',
        justifyContent: 'center'
    }

    // render
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <Grid container justify="center">
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit(this.verifyCode.bind(this))}>
                                {this.renderVerifyForm()}
                                <div style={this.centerWrapper}>
                                    <Button type="submit" variant="raised" color="primary">
                                        Verify
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );
    }

    renderVerifyForm = () => {
        return verifyCodeFields.map( ({label, name, type}) => {
            return <Field key={name} component={InputField} label={label} name={name} type={type}/>
        });
    };

    // logic
    verifyCode(values) {
        authService.verifyCode(values)
            .then(async () => {
                console.log("success");
            })
            .catch(err => console.log(err));
    }
}

export default reduxForm({
    form: 'signupForm',
    destroyOnUnmount: true
})(VerifyForm);
