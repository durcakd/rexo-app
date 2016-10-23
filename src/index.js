import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'
import Login from './containers/Login';


const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export const INITIAL_USER_STATE = {
  loggedIn: false,
  isLoggingIn: false
}

var username = localStorage.username

var user = {
  ...INITIAL_USER_STATE,
  username: username,
  loggedIn: !!username
}
console.log("CREATE APP: initial user state",user)

var initialState = { user }


const store = createStore(
  combineReducers({
    ...reducer,
    form: formReducer,
    routing: routerReducer
  }),
  initialState,
  applyMiddleware(...middleware)
)


var currentUsername = store.getState().user.username
store.subscribe(() => {
  let previousUsername = currentUsername
  let user = store.getState().user
  currentUsername = user.username
  if (previousUsername !== currentUsername) {
    console.log("CREATE APP: change username",previousUsername, '=>', currentUsername);
    localStorage.setItem("username", currentUsername);
  }
})

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="/login" component={Login}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
