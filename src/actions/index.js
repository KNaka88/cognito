import { FETCH_USER } from './types';

import { Auth } from 'aws-amplify';

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

export const changePassword = (values) => async (dispatch) => {
    Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, 'old password', 'new password');
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

export const fetchUser = () => async (dispatch) => {
    Auth.currentAuthenticatedUser().then((user) => {
        dispatch({ type: FETCH_USER, payload: user });

    })
    .catch((err) => {
        dispatch({ type: FETCH_USER, payload: null });
    });
};