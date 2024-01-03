// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Install it via "npm install redux-thunk"
import rootReducer from '../ReduxSetup/RootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
