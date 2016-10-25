import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/user'
import LoginForm from '../components/LoginForm';

const Login = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  propTypes: {
    dispatch: PropTypes.func.isRequired,
    isLoggingIn: PropTypes.bool,
    loggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string,
    loginAt: PropTypes.number
  },

  componentDidMount() {
    console.log('METHOD: Login componentDidMount')
  },

  componentWillReceiveProps(nextProps) {
    console.log('METHOD: Login componentWillReceiveProps')
  },

  handleLoginSubmit(values) {
    console.log('Login submit with values:', values);
    this.props.dispatch(login(values.username, values.password,()=>{
      this.context.router.push('/')
    }));
  },


  render() {
    console.log('METHOD: Login render')

    const { loggedIn, username } = this.props
    return (
      <div>
        {loggedIn ?
          <h4> Logged as user: {username} </h4> : null}
          <LoginForm onSubmit={this.handleLoginSubmit} />

      </div>
    )
  }
})

const mapStateToProps = state => {
  const user = state.user;
  return { isLoggingIn: user.isLoggingIn,
    loggedIn: user.loggedIn,
    username: user.username,
    loginAt: user.loginAt
  }
}

export default connect(mapStateToProps)(Login)
