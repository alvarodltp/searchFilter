import React from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

const Alert = ({alertMessage}) => 
    alertMessage &&  <Message className="alert" color={alertMessage.color}>{alertMessage.text}</Message>

const mapStateToProps = state => {
  return {
    alertMessage: state.nonprofits.alertMessage
  }
}

export default connect(mapStateToProps, null)(Alert)