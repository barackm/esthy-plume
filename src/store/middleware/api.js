import { get } from "lodash";
import * as actions from "../api";

const api = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.apiCallBegan.type) next(action);
  const { onStart, onError, onSuccess } = action.payload;
  // if (onStart) dispatch({ type: onStart });
  next(action);
  // console.log(onStart);
  // dispatch({ type: action.payload.onSuccess, payload: {} });
  // dispatch({ type: onSuccess, payload: {} });
};
export default api;
