
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED
} from '../actions/user'




const userReducer = (state = {
  loggedIn: false,
  isLoggingIn: false
}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        //loggedIn: false,
        isLoggingIn: true
      }
    case LOGIN_REQUEST_SUCCESS:
        return {
          ...state,
          loggedIn: true,
          isLoggingIn: false,
          ...action.data
        }
    case LOGIN_REQUEST_FAILED:
    default:
      return state
  }
}

export default userReducer
