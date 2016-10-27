import React from 'react'
import NavLink from './NavLink'
import { Row, Col,} from 'react-bootstrap';


export default React.createClass({
  render() {
    //const {} = this.props
    return (
      <div className="container">
        <Row className="show-grid">
            <Col sm={6} md={3}><br/>
              <div className="vertical">
              <h4>Functions</h4>
              <div className="nav">
                <li><NavLink className="navitem" to="/doc-process/batch-document-generating">Batch Document Generating</NavLink></li>
                <li><NavLink className="navitem" to="/doc-process/lawsuits-planing">Lawsuits Planing</NavLink></li>
                <li><NavLink className="navitem" to="/doc-process/pdf-generating">Pdf Generating</NavLink></li>
              </div>
              </div>
            </Col>
            <Col sm={6} md={8}><br/>
              <div className="container">
                {this.props.children}
              </div>
            </Col>
          </Row>

      </div>
    )
  }
})
