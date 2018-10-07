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

export const login = (values) => {
    const { email, password } = values;
    return Auth.signIn(email, password);
};

export const signout = () => {
    return Auth.signOut();
}

export const resetPassword = (values) => {
    const { email } = values;
    return Auth.forgotPassword(email);
};

export const updatePassword = (values) => {
    const { email, code, newPassword } = values;
    return Auth.forgotPasswordSubmit(email, code, newPassword);
};