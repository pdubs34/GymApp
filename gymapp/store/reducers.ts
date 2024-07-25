import { combineReducers } from 'redux';
import { SET_USER } from './actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer,
});
