import React from 'react';
import { connect } from 'react-redux';
import './SearchResult.css';
import { selectNonProfit, setAlert } from '../../actions/nonprofits';
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa";


class SearchResult extends React.Component {

  save = (selected) => {
    const alreadySaved = this.props.savedList.find(nonprofit => nonprofit === selected);

    if(alreadySaved === undefined){
      let message = {text: `${selected.name} has been added to your list.`, color: 'green'}
      this.props.selectNonProfit(selected);
      this.props.setAlert(message);
    } else {
      let message = {text: `${selected.name} is already in your list.`, color: 'orange'}
      this.props.setAlert(message);
    }
  }

  render(){
    const { searchResults } = this.props;
    return(
      searchResults && searchResults.map((nonprofit, ein) => 
      <div onClick={() => this.save(nonprofit)} key={ein} className='result-item'>
        <h4><FaUniversity color="blue" />{' '}{nonprofit.name}</h4>
        <p><FaMapMarkerAlt color="blue"/>{' '}{nonprofit.city}, {nonprofit.state}</p>
      </div> )
    )
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.nonprofits.data,
    savedList: state.nonprofits.savedList
  }
}

export default connect(mapStateToProps, { selectNonProfit, setAlert })(SearchResult);