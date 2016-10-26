
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Row, Col, Panel } from 'react-bootstrap'



const FieldBS = ({ name, type, label}) => (
  <Row className="form-group">
    <Col sm={2} className="control-label">
      <label className="form-control-static">{label}</label>
    </Col>
    <Col sm={4} >
      <Field name={name} component={prop =>
        <div>
          <input className="form-control" className="form-control" type={type} {...prop} placeholder="Username"/>
          {prop.touched && prop.error && <span>{prop.error}</span>}
        </div>
      }/>
    </Col>
  </Row>
)

class LoginForm extends Component {
  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="jumbotron" bsStyle="primary">
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Row className="form-group">
          <Col  sm={4} smOffset={2} >
            <h3>Login is required</h3>
          </Col>
        </Row>

        <FieldBS name="username" type="text" label="Username"/>
        <FieldBS name="password" type="password" label="Password"/>
        <Row className="form-group">
        {error && <strong>{error}</strong>}
        </Row>
        <Row className="form-group">
        <Col  sm={1} smOffset={2} >
          <Button type="submit" disabled={submitting}>Log In
          {//submitting
            //? <span><Loading inline delay={false}/> {icon && <img src={icon} className="LoadingButton__icon"/>} {loadingLabel}&hellip;</span>
            //: <span>{icon && <img src={icon} className="LoadingButton__icon"/>} {label}</span>
      }
          </Button>
          </Col>
        </Row>
      </form>
      </div>
    );
  }
}

// Decorate the form component
LoginForm = reduxForm({
  form: 'contact' // a unique name for this form
})(LoginForm);

export default LoginForm;
