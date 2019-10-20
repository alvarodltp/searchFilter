import React from 'react';
import { connect } from 'react-redux';
import './Suggestions.css';
import { selectNonProfit, setAlert } from '../../actions/nonprofits';
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa";


class SearchResult extends React.Component {

  save = (selected) => {
    const alreadySaved = this.props.savedList.find(nonprofit => nonprofit === selected);

    if(alreadySaved === undefined){
      const message = `${selected.name} has been added to your list.`;
      const type = 'green';
      this.props.selectNonProfit(selected);
      this.props.setAlert(message, type);
    } else {
      const message = `${selected.name} is already in your list.`;
      const type = 'orange';
      this.props.setAlert(message, type);
    }
  }

  render(){
    const { suggestions } = this.props;
    console.log(suggestions);
    return(
      <React.Fragment>
        {suggestions && suggestions !== undefined && suggestions[0] !== undefined ? suggestions.map((nonprofit, i) => 
        <div 
          onClick={() => this.save(nonprofit)} 
          key={i} 
          className='result-item' 
          >
            <h4><FaUniversity color="gray" />{' '}{nonprofit.name}</h4>
            <p><FaMapMarkerAlt color="white"/>{' '}{nonprofit.city}, {nonprofit.state}</p>
        </div> ) : null}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    suggestions: state.nonprofits.data,
    savedList: state.nonprofits.savedList
  }
}

export default connect(mapStateToProps, { selectNonProfit, setAlert })(SearchResult);