const INITIAL_STATE = {
    email: '',
    password: '',
    loginState: 'INITIAL'
};

const petsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'UPDATE_EMAIL':
            return {
                ...state,
                email: action.email
            };
        case 'UPDATE_PASSWORD':
            return {
                ...state,
                password: action.password
            };
        default:
            return state;
    }
};

export default petsReducer;