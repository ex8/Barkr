export const updateEmail = email => {
    return {
        type: `UPDATE_EMAIL`,
        email
    };
};

export const updatePassword = password => {
    return {
        type: `UPDATE_PASSWORD`,
        password
    };
};
