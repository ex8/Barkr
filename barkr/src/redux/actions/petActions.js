export const updateEmail = email => {
    return {
        type: 'UPDATE_EMAIL',
        email: email
    };
};

export const updatePassword = password => {
    return {
        type: 'UPDATE_PASSWORD',
        password: password
    };
};

export const submitAction = () => {
    return {
        type: 'SUBMIT',
    };
};