import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
//import { login } from '../actions/user'
//import BatchDocGeneratingForm from '../components/business/BatchDocGeneratingForm';


class BatchDocGenerating extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  handleFormSubmit = (values) => {
      console.log('BatchDocGenerating handleFormSubmit:', values);
      //this.props.dispatch(login(values.username, values.password));
  }

  render() {
    console.log('METHOD: Login render')
    //const {  } = this.props
    return (
      <div>
        <h2>Batch Document Generating</h2>
        { /*<BatchDocGeneratingForm onSubmit={this.handleFormSubmit} /> */ }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(BatchDocGenerating)
