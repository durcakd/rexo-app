import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { testAction } from '../actions'
import TestComponent from '../components/TestComponent'
import NavLink from '../components/NavLink'

class App extends Component {

 //  constructor(props, context){
 //   super(props);
 //   context.router // will work
 // }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    testMsg: PropTypes.string.isRequired,
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
    this.props.dispatch(testAction('new hellohhhh worls'))
  }

  render() {
    console.log('METHOD: app render')

    const { testMsg } = this.props
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        <h1>Rexotech main page</h1>
        <TestComponent msg={testMsg}/>
        <button onClick={this.handleChange}>change</button>
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
    testMsg: state.testReducer.testData || 'Hello world',
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(App)
