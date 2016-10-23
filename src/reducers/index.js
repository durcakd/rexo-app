import { combineReducers } from 'redux'
import {
  TEST_ACTION
} from '../actions'

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

const rootReducer = combineReducers({
  testReducer
})

export default rootReducer
