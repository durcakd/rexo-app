import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { testAction } from '../actions'
import TestComponent from '../components/TestComponent'


class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    testMsg: PropTypes.string.isRequired
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
        <TestComponent msg={testMsg}/>
        <button onClick={this.handleChange}>change</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { testReducer } = state;
  return {
    testMsg: testReducer.testData || 'Hello world'
  }
}

export default connect(mapStateToProps)(App)
