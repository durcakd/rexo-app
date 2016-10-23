import React, {Component, PropTypes } from 'react'
import { Link } from 'react-router'

class NavLink extends Component {
  render() {
    return (
      <Link {...this.props} activeClassName="active"/>
    )
  }
}

// Specifies the default values for props:
NavLink.defaultProps = {
  to: PropTypes.string.isRequired
}

export default NavLink
