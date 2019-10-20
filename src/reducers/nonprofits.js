import { 
  HANDLE_SEARCH,
  SET_SEARCH_RESULTS,
  SEARCH_ERROR, 
  NONPROFIT_SAVED,
  SET_ALERT,
  REMOVE_ALERT,
  NONPROFIT_REMOVED,
  CLEAR_SEARCH,
  SET_LOADING
} from "../actions/types";

const initialState = {
  search: '',
  data: [],
  loading: false,
  savedList: [],
  alerts: [],
  error: {}
}

const nonprofits = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type){
    case HANDLE_SEARCH:
      return {
        ...state,
        search: payload
      }
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        data: payload
      }
    case CLEAR_SEARCH:
      return {
        ...state,
        data: []
      }
    case NONPROFIT_SAVED:
      return {
        ...state,
        savedList: [payload, ...state.savedList]
      }
    case NONPROFIT_REMOVED:
      return {
        ...state,
        savedList: state.savedList.filter(list => list.ein !== payload)
      }
    case SET_ALERT:
      return {
        ...state,
        alerts: [ ...state.alerts, payload]
      }
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== payload)
      }
    case SEARCH_ERROR:
      return {
        ...state,
        error: payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: payload
      }
    default:
      return state;
  }
}

export default nonprofits;