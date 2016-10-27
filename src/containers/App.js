import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {  } from '../actions'
import NavLink from '../components/NavLink'
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';


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
      <Navbar>
       <Navbar.Header>
         <Navbar.Brand>
           <NavLink to="/" onlyActiveOnIndex={true}>Rexotech</NavLink>
         </Navbar.Brand>
       </Navbar.Header>
       <Nav className="nav">
         <NavItem eventKey={1}><NavLink to="/doc-process">Document Processing</NavLink></NavItem>
         <NavItem eventKey={1}><NavLink to="/login">Login</NavLink></NavItem>
       </Nav>
     </Navbar>
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
