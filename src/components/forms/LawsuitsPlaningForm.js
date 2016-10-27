
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormRowWithLabel, InputFieldStyled, FormRowSubmit } from './FormUtil'

const LawsuitsPlaningForm = (props) => {
  const { handleSubmit} = props
  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
    <FormRowWithLabel label="Min days before">
      <InputFieldStyled name="minDaysBefore" placeholder="5"/>
    </FormRowWithLabel>

    <FormRowWithLabel label="Do not start before">
      <InputFieldStyled name="doNotStartBefore" placeholder="mm/dd/yyyy"/>
    </FormRowWithLabel>

    <FormRowWithLabel label="Skip already sent ids">
      <Field  name="skipAlreadySendIds" placeholder="Already sent Ids"
              component="textarea" className="form-control"/>
    </FormRowWithLabel>

    <FormRowWithLabel label="CSV">
      <Field  name="csv" type="file" component="input" />
    </FormRowWithLabel>

    <FormRowSubmit label="Submit" {...props}/>
    </form>
  )
}

// Decorate the form component
export default  reduxForm({
  form: 'lawsuitsPlaning' // a unique name for this form
})(LawsuitsPlaningForm);
