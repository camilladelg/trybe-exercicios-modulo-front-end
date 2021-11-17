import { CADASTRAR_ACTION } from '../action/cadastrarAction';

const INITIAL_STATE = [];

const cadastrarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CADASTRAR_ACTION:
      return ([
        ...state,
        action.data,
      ])
    default: 
      return state;
  }
}

export default cadastrarReducer;