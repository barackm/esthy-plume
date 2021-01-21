import * as actions from "../api";

const api = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.apiCallBegan.type) next(action);

  // const { onStart, onError, onSuccess } = action.payload;
  // if (onStart) dispatch({ type: onStart });
  next(action);
  // dispatch({ type: "comments/commentsRequested", payload: {} });
  // console.log(action);

  // dispatch({ type: onSu ccess  , payload: data || {} });
  // dispatch({ type: onSuccess, payload: {} });
};
export default api;
