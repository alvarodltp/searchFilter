import axios from 'axios';
import { 
  GET_NONPROFITS_BY_NAME, 
  GET_NONPROFITS_BY_EIN, 
  NONPROFIT_SAVED, 
  SEARCH_ERROR,
  SET_ALERT,
  REMOVE_ALERT,
  NONPROFIT_REMOVED
} from './types';
import uuid from 'uuid';
import { setLoading } from './loading';

export const getNonProfitByName = (name) => async dispatch => {
  try {
    setLoading(true);
    
    const response = await axios.get(`https://projects.propublica.org/nonprofits/api/v2/search.json?q=${name}`)

    dispatch({type: GET_NONPROFITS_BY_NAME, payload: response.data.organizations})

    setLoading(false);

  } catch (err) {
    dispatch({type: SEARCH_ERROR, payload: 'Network Error'})
  }
};

export const getNonProfitByEin = (number) => async dispatch => {
  try {
    const response = await axios.get(`https://projects.propublica.org/nonprofits/api/v2/organizations/${number}.json`)

    setLoading(true);

    dispatch({type: GET_NONPROFITS_BY_EIN, payload: response.data.organization});

    setLoading(false);

  } catch (err) {
    dispatch({type: SEARCH_ERROR, payload: 'Network Error'})
  }
};

export const selectNonProfit = nonprofit => async dispatch => {
  dispatch({type: NONPROFIT_SAVED, payload: nonprofit})
};

export const setAlert = (message, type, timeout = 3000) => async dispatch =>{
  const id = uuid.v4();

  dispatch({ type: SET_ALERT, payload: {message, type, id}});

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const removeSavedNonProfit = ein => async dispatch => {
  dispatch({ type: NONPROFIT_REMOVED, payload: ein})
};