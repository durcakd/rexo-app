
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormRowWithLabel, InputFieldStyled, FormRowSubmit } from './FormUtil'

const PdfGeneratingForm = (props) => {
  const { handleSubmit} = props
  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
        <FormRowWithLabel label="Name">
          <InputFieldStyled name="name" placeholder="Name"/>
        </FormRowWithLabel>
        <FormRowWithLabel label="Internal Ids">
          <Field  name="internalIds2" placeholder="Internal Ids"
                  component="textarea" className="form-control"/>
        </FormRowWithLabel>
        <FormRowWithLabel label="Key values pairs">
          <Field  name="keyvalues" component="textarea"
                  placeholder="key=values" className="form-control"/>
        </FormRowWithLabel>

        <FormRowWithLabel label="Email template">
          <Field  name="emailTemplate" type="file" component="input" />
        </FormRowWithLabel>
        <FormRowWithLabel label="Cover letter">
          <Field  name="coverLetter" type="file" component="input" />
        </FormRowWithLabel>
        <FormRowWithLabel label="Lawsuit">
          <Field  name="lawsuit" type="file" component="input" />
        </FormRowWithLabel>
        <FormRowWithLabel label="Lawsuit signed">
          <Field  name="lawsuitSigned" type="file" component="input" />
        </FormRowWithLabel>

        <FormRowSubmit label="Submit" {...props}/>
    </form>
  )
}

// Decorate the form component
export default  reduxForm({
  form: 'pdfGenerating' // a unique name for this form
})(PdfGeneratingForm);
