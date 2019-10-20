import React from 'react';
import './ListEmptyMessage.css';
import { FaUniversity } from "react-icons/fa";
import { connect } from 'react-redux'; 
  
const ListEmptyMessage = ({savedList}) => (
    savedList.length === 0 &&
    <div className="list-empty-message">
      <FaUniversity color='orange' size='50px'/>
      <p>You don't have any saved Non-Profits at this time.</p>
    </div>  
);

const mapStateToProps = state => {
  return {
    savedList: state.nonprofits.savedList
  };
};

export default connect(mapStateToProps)(ListEmptyMessage);
