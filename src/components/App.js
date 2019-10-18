import React from 'react';
import './App.css';
import Nav from './nav/Nav';
import Search from './search/Search';
import SavedList from './saved/SavedList';

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="grid">
        <Search />
        <SavedList />
      </div>
    </React.Fragment>
    
  )
}

export default App;