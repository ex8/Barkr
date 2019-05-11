import axios from 'axios';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const petSignup = (pet, history) => dispatch => {
    axios.post(`/api/signup`, pet)
        .then(res => {
            if (res.data.success) {
                history.push(`/login`);
            }
        }).catch(err => {
            dispatch({
                type: `GET_ERRORS`,
                payload: err
            });
        });
};

export const petLogin = (pet, history) => dispatch => {
    axios.post(`/api/login`, pet)
        .then(res => {
            if (res.data.success) {
                const {token} = res.data;
                localStorage.setItem(`jwtToken`, token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded.data));
                console.log(`USER DATA: ${JSON.stringify(decoded.data)}`);
                history.push(`/`);
            }
        }).catch(err => {
            dispatch({
                type: `GET_ERRORS`,
                payload: err
            });
        });
};

export const petLogout = history => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push(`/login`);
}

export const setCurrentUser = decoded => {
    return {
        type: `SET_CURRENT_USER`,
        payload: decoded
    };
};
