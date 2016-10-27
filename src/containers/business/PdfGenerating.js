import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
//import { login } from '../actions/user'
import PdfGeneratingForm from '../../components/forms/PdfGeneratingForm';


class PdfGenerating extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  handleFormSubmit = (values) => {
      console.log('PdfGenerating handleFormSubmit:', values);
      //this.props.dispatch(login(values.username, values.password));
  }

  render() {
    console.log('METHOD: PdfGenerating render')
    //const {  } = this.props
    return (
      <div>
        <h2>Pdf Generating</h2>
        <PdfGeneratingForm onSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(PdfGenerating)
