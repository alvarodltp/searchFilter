import React from 'react';
import './Search.css';
import SearchResult from '../searchresult/SearchResult';
import { Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getNonProfitByName, getNonProfitByEin } from '../../actions/nonprofits';

class Search extends React.Component {
  constructor(){
    super();
    this.state={
      inputType: 'text',
      searchTerm: ''
    }
  }

  handleCheckbox = (valueType) => {
    this.setState({
      inputType: valueType,
      searchTerm: ''
    });
  }

  handleSearch = () => {
    if(this.state.inputType === 'text'){
      this.props.getNonProfitByName(this.state.searchTerm);
    } else {
      this.props.getNonProfitByEin(this.state.searchTerm);
    }
  }

  render(){
    const { inputType } = this.state;
    return(
      <React.Fragment>
        <div className="search-box">
          <div className="checkbox-group">
            <Checkbox 
              onChange={(_, data) => this.handleCheckbox('text')} checked={inputType === 'text'}  
              label='Search By Name'
            />
            <Checkbox 
              onChange={(_, data) => this.handleCheckbox('number')} checked={inputType === 'number'} 
              name="ein" 
              label='Search By EIN'
            />
          </div>
          <div className="search">
            <input 
              className="input" 
              type={inputType} 
              placeholder="Search Non-Profit..." 
              onKeyUp={(e) => this.handleSearch(this.setState({searchTerm: e.target.value}))}
            />
          <div className="results-container">
            <SearchResult />
          </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.loading)
  return { loading: state.loading }
};

export default connect(mapStateToProps, { 
  getNonProfitByName, 
  getNonProfitByEin
})(Search);