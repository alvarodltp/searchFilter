import React from 'react';
import { connect } from 'react-redux';
import { FaTrash, FaUniversity } from "react-icons/fa";
import { removeSavedNonProfit } from '../../actions/nonprofits';

const SavedItems = ({savedList, removeSavedNonProfit}) => (
    savedList.map(nonprofit => (
      <div key={nonprofit.ein} className="saved-card">
        <div className="card-content">
          <h4><FaUniversity/>{'  '}{nonprofit.name}</h4>
          <p>{nonprofit.address}</p>
          <p>{nonprofit.city}, {nonprofit.state} {nonprofit.zipcode}</p>
        </div> 
        <button onClick={() => removeSavedNonProfit(nonprofit.ein)} className="remove">
          <FaTrash />
        </button>
      </div>
    )
  )
)

const mapStateToProps = state => {
  return {
    savedList: state.nonprofits.savedList
  };
};

export default connect(mapStateToProps, { removeSavedNonProfit })(SavedItems);
