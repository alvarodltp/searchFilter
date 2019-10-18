import React from 'react';
import './SavedList.css';
import { FaUniversity } from "react-icons/fa";
import { connect } from 'react-redux'; 
  
const ListEmptyMessage = ({savedList}) => {
  return (
    savedList.length === 0 &&
    <div className="list-empty-message">
      <FaUniversity className="smile-icon" color='orange' size='50px'/>
      <p>You don't have any saved Non-Profits at this time.</p>
    </div>  
  )
}

const mapStateToProps = state => {
  return {
    savedList: state.nonprofits.savedList
  }
}


export default connect(mapStateToProps, null)(ListEmptyMessage);
