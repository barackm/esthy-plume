import * as actions from "../api";
import { toast } from "react-toastify";

const error = (store) => (next) => (action) => {
  if (!action.type !== actions.apiCallFailed.type) next(action);

  toast.error(action.payload);
};

export default error;
