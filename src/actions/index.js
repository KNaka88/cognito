import { FETCH_USER } from './types';

import { Auth } from 'aws-amplify';

export const login = (values) => async (dispatch) => {
    Auth.signIn(values.email, values.password)
    .then(user => console.log(user))
    .catch(err => console.log(err));
};

export const signup = (values) => async (dispatch) => { 
    Auth.signUp({
        'username': values.email,
        'password': values.password,
        'attributes': {
            'email': values.email,
            'given_name': values.firstName,
            'family_name': values.lastName
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

export const verifyCode = (values) => async (dispatch) => {
    Auth.confirmSignUp(values.email, values.code, {
        forceAliasCreation: true    
    }).then(data => console.log(data))
      .catch(err => console.log(err));
};

export const changePassword = (values) => async (dispatch) => {
    Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, 'old password', 'new password');
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
};