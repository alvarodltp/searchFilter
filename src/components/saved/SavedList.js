import React from 'react';
import './SavedList.css';
import Alert from '../alert/Alert';
import ListEmptyMessage from './ListEmptyMessage';
import SavedItems from './SavedItems';
  
const SavedList = () => (
  <div className="saved-list">
    <div className="container-list"> 
      <div className="alert-container">
        <Alert />
      </div>
      <ListEmptyMessage />
      <SavedItems />
    </div>
  </div>
)

export default SavedList;