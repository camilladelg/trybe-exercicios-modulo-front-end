import { LOGIN_ACTION } from '../action/loginAction';

const INITIAL_STATE = {
  login: {
    email: '',
    senha: '',
  },
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return ({
        ...state,
        login: action.login,
      })
    default: 
      return state;
  }
}

export default loginReducer;


