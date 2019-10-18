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


export const getNonProfitByName = name => async dispatch => {
  try {
    const response = await axios.get(`https://projects.propublica.org/nonprofits/api/v2/search.json?q=${name}`)

    dispatch({type: GET_NONPROFITS_BY_NAME, payload: response.data.organizations})

  } catch (err) {
    dispatch({type: SEARCH_ERROR, payload: 'Network Error'})
  }
};

export const getNonProfitByEin = number => async dispatch => {
  try {
    const response = await axios.get(`https://projects.propublica.org/nonprofits/api/v2/organizations/${number}.json`)

    dispatch({type: GET_NONPROFITS_BY_EIN, payload: response.data.organization})

  } catch (err) {
    dispatch({type: SEARCH_ERROR, payload: 'Network Error'})
  }
};

export const selectNonProfit = nonprofit => async dispatch => {
  dispatch({type: NONPROFIT_SAVED, payload: nonprofit})
};

export const setAlert = (alertMessage, timeout = 3000) => async dispatch =>{
  dispatch({ type: SET_ALERT, payload: alertMessage})

  setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
};

export const removeSavedNonProfit = ein => async dispatch => {
  dispatch({ type: NONPROFIT_REMOVED, payload: ein})
};