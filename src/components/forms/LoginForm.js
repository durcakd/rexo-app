
import React from 'react';
import { reduxForm } from 'redux-form';
import { FormRowWithLabel, InputFieldStyled, FormRowSubmit } from './FormUtil'

const LoginForm = (props) => {
  const { handleSubmit} = props
  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
        <FormRowWithLabel label="Username">
          <InputFieldStyled name="username" placeholder="Username"/>
        </FormRowWithLabel>
        <FormRowWithLabel label="Password">
          <InputFieldStyled name="password" placeholder="Password" type="password"/>
        </FormRowWithLabel>
        <FormRowSubmit label="Log in" {...props}/>
    </form>
  )
}

// Decorate the form component
export default  reduxForm({
  form: 'login' // a unique name for this form
})(LoginForm);
