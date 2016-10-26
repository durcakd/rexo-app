import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { store, history } from './utils/createStore'
import { login } from './actions/user'

import App from './containers/App'
import Login from './containers/Login'
import About from './components/About'
import Repos from './components/Repos'
import Repo from './components/Repo'
import Home from './components/Home'
import DocProcessingSidebar from './components/DocProcessingSidebar'
import BatchDocGenerating from './containers/business/BatchDocGenerating'
import LawsuitsPlaning from './containers/business/LawsuitsPlaning'
import PdfGenerating from './containers/business/PdfGenerating'


function requireCredentials(nextState, replace, next) {
  console.log("ON ENTER, requireCredentials");
  const query = nextState.location
  // TODO only if user not loged in store
  store.dispatch(login(null, null, next, ()=>{
    replace('/login')
    next()
  }));
  next()
}

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/login" component={Login}/>
      <Route path="/" component={App} onEnter={requireCredentials}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/repos" component={Repos}>
          <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/doc-process" component={DocProcessingSidebar}>
          <Route path="/doc-process/batch-document-generating" component={BatchDocGenerating}/>
          <Route path="/doc-process/lawsuits-planing" component={LawsuitsPlaning}/>
          <Route path="/doc-process/pdf-generating" component={PdfGenerating}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
