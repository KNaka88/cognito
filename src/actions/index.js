import { FETCH_USER, LOGIN_ERROR, LOGIN_DEFAULT_ERROR, NON_VERIFIED_USER } from './types';

import { Auth } from 'aws-amplify';


export const login = (values) => async (dispatch) => {
    Auth.signIn(values.email, values.password)
    .then((user) => {
        if (user.challenge === undefined) {
            console.log(user, "Auth Success");
        } else {
            dispatch({ type: user.challenge, payload: user });
        }
    })
    .catch(err => {
        console.log(err);
        const errorType = getLoginErrorType(err.message);
        dispatch({ type: errorType });
    });
};

export const signup = (values) => async (dispatch) => { 

    const {email, password, firstName, lastName } = values;

    Auth.signUp({
        'username': email,
        'password': password,
        'attributes': {
            'email': email,
            'given_name': firstName,
            'family_name': lastName
        }
    })
    .then((user) => {
        dispatch({ type: NON_VERIFIED_USER, payload: user });
    })
    .catch(async err => {
        if (err.code === "UsernameExistsException") {
            console.log("user already exists");
        } else {
            console.log(err, "error??");
        }
    });
};

export const resetPassword = (email) => async (dispatch) => {
    Auth.forgotPassword(email)
    .then((data) => {
        console.log(data);
        // dispath tell reset code was sent,
        // then open reset page
    })
    .catch((err) => {
        console.log(err);
    });
};

export const verifyCode = (values) => async (dispatch) => {
    Auth.confirmSignUp(values.email, values.code, {
        forceAliasCreation: true    
    }).then(async () => {
        const user = await Auth.currentAuthenticatedUser();
        console.log("current user", user);
        dispatch({ type: FETCH_USER, payload: user });
    })
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

function getLoginErrorType(errMessage) {
    switch(errMessage) {
        case "Incorrect username or password.":
            return LOGIN_ERROR;
        case "User does not exist":
            return LOGIN_ERROR;
        default:
            return LOGIN_DEFAULT_ERROR;
    }
}