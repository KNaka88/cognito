import { LOGIN_ERROR, LOGIN_DEFAULT_ERROR } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
      case LOGIN_ERROR:
        return "Incorrect name or password" || false;
      case LOGIN_DEFAULT_ERROR:
        return "Error occurred. Try again later" || false;
      default:
        return state;
    }
}