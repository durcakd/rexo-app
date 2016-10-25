import React, { PropTypes } from 'react'

const BaseContent = ({props}) => (
  <div>
    <h4>Functions</h4>
    <ul>
      {menuItems.map( menuItem=>(
        <li><NavLink to={menuItem.to}>{menuItem.label}</NavLink></li>
      ))}
    </ul>
    {this.props.children}
  </div>
)

BaseContent.propTypes = {
}

export default BaseContent
