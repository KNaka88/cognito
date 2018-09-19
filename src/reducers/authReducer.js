import { SMS_MFA, PASSWORD_VERIFIER, CUSTOM_CHALLENGE, DEVICE_SRP_AUTH, DEVICE_PASSWORD_VERIFIER,  NEW_PASSWORD_REQUIRED } from '../actions/awsAuthType';
import { FETCH_USER, NON_VERIFIED_USER } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                    user: action.payload.user,
                    userConfirmed: true
                    } || false;
        case NON_VERIFIED_USER:
            return {
                user: action.payload.user,
                userConfirmed: false
            } || false;
        case SMS_MFA:
            console.log(action.type);
            return action.payload || false;

        case PASSWORD_VERIFIER:
            console.log(action.type);
            return action.payload || false;

        case CUSTOM_CHALLENGE:
            console.log(action.type);
            return action.payload || false;

        case DEVICE_SRP_AUTH:
            console.log(action.type);
            return action.payload || false;

        case DEVICE_PASSWORD_VERIFIER:
            console.log(action.type);
            return action.payload || false;

        case NEW_PASSWORD_REQUIRED:
            console.log(action.type);
            return action.payload || false;

        default:
        return state;
    }
}