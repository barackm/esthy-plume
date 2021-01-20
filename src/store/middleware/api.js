import * as actions from "../api";

const api = (store) => (next) => (action) => {
  console.log(store);
  //   if (action.type !== actions.apiCallBegan) next(action);
  //   const { data, onSuccess } = action.payload;
  //   return dispatch({ type: onSuccess, payload: data });
};
export default api;
