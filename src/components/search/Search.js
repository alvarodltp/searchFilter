import React from 'react';
import './Search.css';
import Suggestions from '../suggestions/Suggestions';
import { Radio, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getNonProfitByName, getNonProfitByEin } from '../../actions/nonprofits';
import { isValid} from 'ein-validator';

class Search extends React.Component {
  constructor(){
    super();
    this.state={
      inputType: 'text',
      searchTerm: '',
      loading: false
    }
  }

  handleCheckbox = (valueType) => {
    this.setState({
      inputType: valueType,
      searchTerm: ''
    })
  }


  handleSearch = (e) => {
    const { inputType } = this.state;

    this.setState({searchTerm: e.target.value});
    if(inputType === 'text'){
      this.props.getNonProfitByName(e.target.value);
    } else if(inputType === 'number' && isValid(e.target.value)){
      this.props.getNonProfitByEin(e.target.value);
    }
  }

  render(){
    const { inputType, loading } = this.state;
    return(
      <div className="search-box">
        <div className="checkbox-group">
          <Radio 
            onChange={(_, data) => this.handleCheckbox('text')} 
            checked={inputType === 'text'}  
            label='Search By Name'
          />
          <Radio 
            onChange={(_, data) => this.handleCheckbox('number')} 
            checked={inputType === 'number'} 
            label='Search By EIN'
          />
        </div>
        
        <div className="search">
          <input 
            className="input" 
            type={inputType} 
            placeholder="Search Non-Profit..." 
            onChange={(e) => this.handleSearch(e)}
            value={this.state.searchTerm}
          />
          <div className="results-container">
            <Suggestions />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { loading: state.loading }
};

export default connect(mapStateToProps, { 
  getNonProfitByName, 
  getNonProfitByEin
})(Search);