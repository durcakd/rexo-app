import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { testAction } from '../actions'
import TestComponent from '../components/TestComponent'
import NavLink from '../components/NavLink'

import { Grid, Row, Col } from 'react-bootstrap';

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
    const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
     'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.',
     'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.',
    'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];
    const { testMsg } = this.props
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/doc-process">Document Processing</NavLink></li>
        </ul>
        <Grid>
          <Row className="show-grid">
            <Col sm={3} md={3}><br/>
            {dummySentences.slice(0, 6).join(' ')}
            </Col>
            <Col sm={4} md={8}><br/>
            {dummySentences.slice(0, 4).join(' ')}
            </Col>
          </Row>

        </Grid>
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
    testMsg: state.testReducer.testData || 'Hello world',
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(App)
