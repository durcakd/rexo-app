import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
//import { login } from '../actions/user'
import LawsuitsPlaningForm from '../../components/forms/LawsuitsPlaningForm';


class LawsuitsPlaning extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  handleFormSubmit = (values) => {
      console.log('LawsuitsPlaning handleFormSubmit:', values);
      //this.props.dispatch(login(values.username, values.password));
  }

  render() {
    console.log('METHOD: LawsuitsPlaning render')
    //const {  } = this.props
    return (
      <div>
        <h2>Lawsuits Planing</h2>
        <LawsuitsPlaningForm onSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(LawsuitsPlaning)
