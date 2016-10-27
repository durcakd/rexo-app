import React from 'react';
import { Field } from 'redux-form';
import { Row, Col, Button } from 'react-bootstrap'


export const FormRowWithLabel = (props) => (
  <Row className="form-group">
    <Col sm={2} className="control-label">
      <label className="form-control-static">{props.label}</label>
    </Col>
    <Col sm={4} >
      {props.children}
    </Col>
  </Row>
)

export const FormRowSubmit = ({label, pristine, submitting}) => (
  <Row className="form-group">
    <Col  sm={1} smOffset={2} >
      <Button type="submit" disabled={pristine || submitting}>{label}
      {//submitting
      //? <span><Loading inline delay={false}/> {icon && <img src={icon} className="LoadingButton__icon"/>} {loadingLabel}&hellip;</span>
      //: <span>{icon && <img src={icon} className="LoadingButton__icon"/>} {label}</span>
      }
      </Button>
    </Col>
  </Row>
)

export const InputFieldStyled = (props) => (
  <Field  className="form-control"
          type="text"
          component="input"
          {...props}/>
)





export const FormExample = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
        <FormRowWithLabel label="Username">
          <Field name="username" placeholder="Username" type="text" component="input"/>
        </FormRowWithLabel>
        <button type="submit" disabled={pristine || submitting}>Log in</button>
    </form>
  )
}
