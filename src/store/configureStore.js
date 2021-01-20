import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import auth from "./auth";
import api from "./middleware/api";
import reducer from "./reducer";
export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
}
