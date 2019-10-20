import axios from 'axios';
import { 
  GET_NONPROFITS_BY_NAME, 
  GET_NONPROFITS_BY_EIN, 
  NONPROFIT_SAVED, 
  SEARCH_ERROR,
  SET_ALERT,
  REMOVE_ALERT,
  NONPROFIT_REMOVED,
  CLEAR_SEARCH
} from './types';
import uuid from 'uuid';

const url = "https://api.givebutter.dev/nonprofits/api/v2";

export const getNonProfitByName = name => async dispatch => {

  try {

    if(name && name.length > 1 && name.length % 2 === 0){

      console.log(`${url}/search.json?q=${name}`);
      const response = await axios.get(`${url}/search.json?q=${name}`);

      dispatch({type: GET_NONPROFITS_BY_NAME, payload: response.data.organizations});
    
    } else {
      dispatch({type: CLEAR_SEARCH, payload: []});
    }

  } catch (err) {
    dispatch({type: SEARCH_ERROR, payload: err})
  };
};

// export const setSearchResults = search => async dispatch => {

// };

export const getNonProfitByEin = number => async dispatch => {
  console.log(`${url}/organizations/${number}.json`);

  try {
    const response = await axios.get(`${url}/organizations/${number}.json`);
    console.log(response)
    dispatch({type: GET_NONPROFITS_BY_EIN, payload: response.data.organization});

  } catch (err) {
    dispatch({type: SEARCH_ERROR, payload: err})
  };
};

export const selectNonProfit = nonprofit => dispatch => {
  dispatch({type: NONPROFIT_SAVED, payload: nonprofit})
};

export const setAlert = (message, type, timeout = 3000) => dispatch => {
  const id = uuid.v4();

  dispatch({ type: SET_ALERT, payload: {message, type, id}});

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};


export const removeSavedNonProfit = ein => dispatch => {
  dispatch({ type: NONPROFIT_REMOVED, payload: ein})
};