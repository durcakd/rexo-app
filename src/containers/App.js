import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {  } from '../actions'
import NavLink from '../components/NavLink'

class App extends Component {

 //  constructor(props, context){
 //   super(props);
 //   context.router // will work
 // }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired
  }

  componentDidMount() {
    console.log('METHOD: APP componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('METHOD: APP componentWillReceiveProps')
  }

  handleChange = nextReddit => {
    console.log('METHOD: APP handleChange')
  }

  render() {
    console.log('METHOD: app render')
      // const {  } = this.props
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/doc-process">Document Processing</NavLink></li>
        </ul>
        <h1>Rexotech main page</h1>
        {this.props.children}
      </div>



    )
  }
}

// App.contextTypes = {
//     router: React.PropTypes.object.isRequired
// };

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(App)
