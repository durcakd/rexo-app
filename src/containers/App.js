import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { testAction } from '../actions'
import { login } from '../actions/user'
import LoginForm from '../components/LoginForm';
import TestComponent from '../components/TestComponent'


class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    testMsg: PropTypes.string.isRequired,
    user: React.PropTypes.shape({
      isLoggingIn: PropTypes.bool,
      loggedIn: PropTypes.bool.isRequired,
      username: PropTypes.string,
      loginAt: PropTypes.number
  })

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

  handleLoginSubmit = (values) => {
      // Do something with the form values
      console.log('Loogin submit with values:', values);
      this.props.dispatch(login(values.username, values.password));
    }


  render() {
    console.log('METHOD: app render')

    const { testMsg, user } = this.props
    return (
      <div>
        <TestComponent msg={testMsg}/>
        <button onClick={this.handleChange}>change</button>
        {user.loggedIn ?
          <h3> User: {user.username} </h3> :
          <LoginForm onSubmit={this.handleLoginSubmit} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { testReducer, user } = state;
  return {
    testMsg: testReducer.testData || 'Hello world',
    user: user
  }
}

export default connect(mapStateToProps)(App)
