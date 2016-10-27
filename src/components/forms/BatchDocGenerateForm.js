
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormRowWithLabel, InputFieldStyled, FormRowSubmit } from './FormUtil'

const BatchDocGenerateForm = (props) => {
  const { handleSubmit} = props
  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
        <FormRowWithLabel label="Filename column">
          <InputFieldStyled name="filenameColumn" placeholder="FilenameColumn"/>
        </FormRowWithLabel>
        <FormRowWithLabel label="Template">
          <Field  name="template" type="file" component="input" />
        </FormRowWithLabel>
        <FormRowWithLabel label="CSV">
          <Field name="csv" type="file" component="input" />
        </FormRowWithLabel>
        <FormRowSubmit label="Submit" {...props}/>
    </form>
  )
}

// Decorate the form component
export default  reduxForm({
  form: 'batchdoDocGenerate' // a unique name for this form
})(BatchDocGenerateForm);
