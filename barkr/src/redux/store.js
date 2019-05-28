import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

// for REDUX DEV TOOLS
// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk), 
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//         )
// );

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;