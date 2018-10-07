export const emailValidation = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = regex.test(email);

    if (validEmail) {
        return '';
    } else {
        return 'Invalid format';
    }
};


  export const passwordValidation = (password) => {
    
    const longLength = password.length >= 6;
    const includeUpperLowerCase = password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/);
    const includeNumber = password.match(/([0-9])/);
    const includeSpecialCharacter = password.match(/([!,%,&,@,#,$,^,*,?,_,~])/);

    const validPassword = longLength && includeUpperLowerCase && includeNumber && includeSpecialCharacter;

    if (validPassword) {
        return '';
    } else {
        return 'Password is too weak';
    }
};

export const passwordMatchValidation = (password, confirmPassword) => { 
    
    if (password === confirmPassword) {
        return '';
    } else {
        return 'Password does not match';
    }
};
