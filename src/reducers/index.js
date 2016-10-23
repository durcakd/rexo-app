import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { TEST_ACTION } from '../actions'

import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED } from '../actions/user'

const testReducer = (state = { }, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        testData: action.data
      }
    default:
      return state
  }
}



const user = (state = {
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

const rootReducer = combineReducers({
  user,
  testReducer,
  form: formReducer
})

export default rootReducer
