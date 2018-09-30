import { Auth } from 'aws-amplify';


export const signup = (values) => { 
    const { email, password, firstName, lastName } = values;

    return Auth.signUp({
        'username': email,
        'password': password,
        'attributes': {
            'email': email,
            'given_name': firstName,
            'family_name': lastName
        }
    });
};

export const verifyCode = (values) => {
    const { email, code } = values;

    return Auth.confirmSignUp(email, code, { forceAliasCreation: true });
};

