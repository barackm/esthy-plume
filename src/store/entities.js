import { combineReducers } from "redux";
import articles from "./articles";
import categories from "./categories";
import notifications from "./notifications";
import messages from "./messages";
import comments from "./comments";
const entities = combineReducers({
  articles,
  categories,
  notifications,
  messages,
  comments,
});

export default entities;
