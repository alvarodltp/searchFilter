import React from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

const Alert = ({alerts}) => 
  alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <Message key={alert.id} className="alert" color={alert.type}>{alert.message}</Message>
    )
  ) 
  
const mapStateToProps = state => {
  console.log(state.nonprofits.alerts)
  return {
    alerts: state.nonprofits.alerts
  }
}

export default connect(mapStateToProps, null)(Alert)