import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import initialState from 'initialState';
import { logUserIn } from 'routines';


function user(state = initialState.user, action: any) {
  switch (action.type) {
    case logUserIn.TRIGGER:
      return { ...state, loading: true };
    case logUserIn.SUCCESS:
      return { ...state, ...action.payload, status: 'success' };
    case logUserIn.FAILURE:
      return { ...state, ...action.payload, status: 'failure' };
    case logUserIn.FULFILL:
      return { ...state, loading: false };
    default: return state;
  }
}

const rootReducer = (history: any) => combineReducers({
  user,
  router: connectRouter(history),
});

export default rootReducer;
