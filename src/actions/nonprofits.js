import axios from 'axios';
import { 
  SET_SEARCH_RESULTS, 
  NONPROFIT_SAVED, 
  SEARCH_ERROR,
  SET_ALERT,
  REMOVE_ALERT,
  NONPROFIT_REMOVED,
  CLEAR_SEARCH,
  SET_LOADING
} from './types';
import uuid from 'uuid';
import { isValid } from 'ein-validator/dist/src';

const url = "https://api.givebutter.dev/nonprofits/api/v2";

export const setSearchResults = search => async dispatch => {

  try {

    if(search.length === 0){

      dispatch({type: CLEAR_SEARCH, payload: []});

    } else if(isValid(search)){

      dispatch({type: SET_LOADING, payload: true});

      console.log(`https://api.givebutter.dev/nonprofits/api/v2/organizations/${search}.json`)

      const response = await axios.get(`${url}/organizations/${search}.json`);
    
      dispatch({type: SET_SEARCH_RESULTS, payload: [response.data.organization]});

      dispatch({type: SET_LOADING, payload: false});

    } else {

      dispatch({type: SET_LOADING, payload: true});
      
      console.log(`https://api.givebutter.dev/nonprofits/api/v2/search.json?q=${search}`);

      const response = await axios.get(`${url}/search.json?q=${search}`);

      dispatch({type: SET_SEARCH_RESULTS, payload: response.data.organizations});

      dispatch({type: SET_LOADING, payload: false});
    }

  } catch (err) {
    dispatch({type: SEARCH_ERROR, payload: err})
  }
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