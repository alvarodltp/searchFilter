import React from 'react';
import './App.css';
import Header from './header/Header';
import Search from './search/Search';
import SavedList from './saved/SavedList';

const App = () => (
  <React.Fragment>
    <Header />
    <div className="grid">
      <Search />
      <SavedList />
    </div>
  </React.Fragment>  
)

export default App;