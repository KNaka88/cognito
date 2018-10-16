import { FETCH_USER } from './types';
import { Auth } from 'aws-amplify';

export const fetchUser = () => (dispatch) => {
    Auth.currentAuthenticatedUser()
        .then((user) => {
            dispatch({ type: FETCH_USER, payload: user });
        })
        .catch((err) => {
            dispatch({ type: FETCH_USER, payload: null });
        });
};