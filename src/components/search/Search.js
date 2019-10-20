import React from 'react';
import './Search.css';
import Suggestions from '../suggestions/Suggestions';
import { connect } from 'react-redux';
import { setSearchResults } from '../../actions/nonprofits';
import { Loader } from 'semantic-ui-react';

class Search extends React.Component {
  constructor(){
    super();
    this.state={
      searchTerm: ''
    }
  }

  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value});
    this.props.setSearchResults(e.target.value);
  }

  render(){
    console.log(this.props.loading)
    return(
      <div className="search-box">
        <div className="search">
          <input 
            className="input" 
            placeholder="Search Non-Profit By Name or EIN..." 
            onChange={(e) => this.handleSearch(e)}
            value={this.state.searchTerm}
          />
          <Loader active={this.props.loading} />
        </div>
        <div className="results-container">
          <Suggestions />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { loading: state.loading }
};

export default connect(mapStateToProps, { setSearchResults })(Search);
