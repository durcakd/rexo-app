import React from 'react'
import NavLink from './NavLink'
import { Grid, Row, Col } from 'react-bootstrap';

export default React.createClass({
  render() {
    //const {} = this.props
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}><br/>
              <h4>Functions</h4>
              <ul>
                <li><NavLink to="/doc-process/batch-document-generating">Batch Document Generating</NavLink></li>
                <li><NavLink to="/doc-process/lawsuits-planing">Lawsuits Planing</NavLink></li>
                <li><NavLink to="/doc-process/pdf-generating">Pdf Generating</NavLink></li>
              </ul>
            </Col>
            <Col sm={6} md={9}><br/>
              {this.props.children}
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
})
