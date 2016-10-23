import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'

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
  reducer,
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


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
