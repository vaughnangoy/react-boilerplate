import { combineReducers } from 'redux';
//import { reducer as form } from 'redux-form';
import defaultReducer from './defaultReducer';

const rootReducer = combineReducers({ defaultReducer });

export default rootReducer;
