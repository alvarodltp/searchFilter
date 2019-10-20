import React from 'react';
import './Search.css';
import Suggestions from '../suggestions/Suggestions';
import { connect } from 'react-redux';
import { setSearchResults } from '../../actions/nonprofits';
import { Loader } from 'semantic-ui-react';

class Search extends React.Component {
  
  handleOnChange = (e) => {
    this.props.setSearchResults(e.target.value);
  }

  render(){
    const { search, loading } = this.props;
    return(
      <div className="search-box">
        <div className="search">
          <input 
            className="input" 
            placeholder="Search Non-Profit By Name or EIN..." 
            onChange={(e) => this.handleOnChange(e)}
            value={search}
          />
          <Loader className="loader" active={loading} inline/>
        </div>
        <div className="results-container">
          <Suggestions />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    loading: state.nonprofits.loading,
    search: state.nonprofits.search
  }
};

export default connect(mapStateToProps, { setSearchResults })(Search);
