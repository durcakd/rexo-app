
import { createStore, applyMiddleware, combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'
import userReducer from '../reducers/user'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export const store = createStore(
  combineReducers({
    user: userReducer,
    form: formReducer,
    routing: routerReducer
  }),
  {},
  applyMiddleware(...middleware)
)

export const history = syncHistoryWithStore(browserHistory, store)
