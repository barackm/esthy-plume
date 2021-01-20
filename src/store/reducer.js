import { combineReducers } from "redux";
import entities from "./entities";
import auth from "./auth";
const reducer = combineReducers({
  entities,
  auth,
});

export default reducer;
