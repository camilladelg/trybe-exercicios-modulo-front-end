import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import cadastrarReducer from './cadastrarReducer';

const rootReducer = combineReducers({
  loginReducer,
  cadastrarReducer,
});

export default rootReducer;