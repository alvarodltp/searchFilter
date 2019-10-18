import { SET_LOADING } from "../actions/types";

const loading = (state = false, action) => {
  const { type, loading } = action;
  if (type === SET_LOADING) return loading;

  return state;
};

export default loading;