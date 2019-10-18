import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import nonprofits from "../reducers/nonprofits";
import loading from "../reducers/loading";

const initialState = {};

const rootReducer = combineReducers({
  nonprofits,
  loading
});

const middleware = [thunkMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

store.subscribe(() => console.log('store', store.getState()));

export default store;