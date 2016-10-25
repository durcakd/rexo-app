import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'
import Login from './containers/Login'
import About from './components/About'
import Repos from './components/Repos'
import Repo from './components/Repo'
import Home from './components/Home'
import { login } from './actions/user'

import DocProcessingMenu from './components/DocProcessingMenu'
import BatchDocGenerating from './containers/business/BatchDocGenerating'
import LawsuitsPlaning from './containers/business/LawsuitsPlaning'
import PdfGenerating from './containers/business/PdfGenerating'



const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  combineReducers({
    ...reducer,
    form: formReducer,
    routing: routerReducer
  }),
  applyMiddleware(...middleware)
)


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

function requireCredentials(nextState, replace, next) {
  console.log("ON ENTER, requireCredentials");
  const query = nextState.location
  console.log("ON ENTER, requireCredentials", query);

  store.dispatch(login(null, null, next, ()=>{
    replace('/login')
    next()
  }));
}


function ErrorPage() {
  return <h1>Oh no! Your auth failed!</h1>
}

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/login" component={Login}/>
      <Route path="/error" component={ErrorPage}/>
      <Route path="/" component={App} onEnter={requireCredentials}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/repos" component={Repos}>
          <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/doc-process" component={DocProcessingMenu}>
          <Route path="/doc-process/batch-document-generating" component={BatchDocGenerating}/>
          <Route path="/doc-process/lawsuits-planing" component={LawsuitsPlaning}/>
          <Route path="/doc-process/pdf-generating" component={PdfGenerating}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
