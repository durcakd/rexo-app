import React from 'react'
import NavLink from './NavLink'


export default React.createClass({
  render() {
    const {menuItems} = this.props
    return (
      <div>
        <h4>Functions</h4>
        <ul>
          <li><NavLink to="/doc-process/batch-document-generating">Batch Document Generating</NavLink></li>
          <li><NavLink to="/doc-process/lawsuits-planing">Lawsuits Planing</NavLink></li>
          <li><NavLink to="/doc-process/pdf-generating">Pdf Generating</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
