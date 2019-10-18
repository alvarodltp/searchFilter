import React from 'react';
import './SavedList.css';
import Alert from '../alert/Alert';
import ListEmptyMessage from './ListEmptyMessage';
import SavedItem from './SavedItem';
  
const SavedList = () => {
  return (
    <div className="saved-list">
      <div className="container-list"> 
        <div className="alert-container">
          <Alert />
        </div>
        <ListEmptyMessage />
        <SavedItem />
      </div>
    </div>
  )
}

export default SavedList;