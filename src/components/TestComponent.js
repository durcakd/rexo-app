import React, { PropTypes } from 'react'

const TestComponent = ({msg}) => (
  <ul>
    <li key={msg}>{msg}</li>
  </ul>
)

TestComponent.propTypes = {
  msg: PropTypes.string.isRequired
}

export default TestComponent
