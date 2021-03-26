import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import api from "./middleware/api";
import auth from "./middleware/auth";
import error from "./middleware/error";
import reducer from "./reducer";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), auth, api, error],
  });
}
