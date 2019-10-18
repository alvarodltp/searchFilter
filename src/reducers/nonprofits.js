import { 
  GET_NONPROFITS_BY_NAME, 
  GET_NONPROFITS_BY_EIN, 
  SEARCH_ERROR, 
  NONPROFIT_SAVED,
  SET_ALERT,
  REMOVE_ALERT,
  NONPROFIT_REMOVED
} from "../actions/types";

const initialState = {
  data: [],
  loading: true,
  savedList: [],
  alertMessage: null,
  error: {}
}

const nonprofits = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type){
    case GET_NONPROFITS_BY_NAME:
      return {
        ...state,
        data: payload,
        loading: false
      }
    case GET_NONPROFITS_BY_EIN:
      return {
        ...state,
        data: [...state.data, payload],
        loading: false
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
        alertMessage: payload
      }
    case REMOVE_ALERT:
      return {
        ...state,
        alertMessage: null
      }
    case SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}

export default nonprofits;