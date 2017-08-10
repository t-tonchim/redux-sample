import { createStore } from 'redux';
import countReducer from './reducers/countReducer.js';

const initialState = { count: 0 };

export default createStore(countReducer, initialState);
