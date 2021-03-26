import * as actions from "../api";
import Axios from "axios";
const baseURL = "https://";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);
  next(action);
  const { url, onSuccess, onError, data, method, onStart } = action.payload;
  if (onStart) dispatch({ type: onStart });
  try {
    const response = await Axios.request({
      baseURL,
      url,
      method,
      data,
    });
    onSuccess
      ? dispatch({
          type: onSuccess,
          payload: response.data,
          headers: response.headers,
        })
      : dispatch(actions.apiCallSuccess(response.data));
  } catch (ex) {
    onError
      ? dispatch({ type: onError, payload: ex.mesage })
      : dispatch(actions.apiCallFailed(ex.message));
  }
};
export default api;
