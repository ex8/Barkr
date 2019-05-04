const INITIAL_STATE = {
    email: '',
    password: '',
};

function loginReducer(state=INITIAL_STATE, action) {
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
}

export default loginReducer;
