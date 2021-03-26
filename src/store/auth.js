import { createSlice } from "@reduxjs/toolkit";
import jwt from "jsonwebtoken";
import * as actions from "./api";

const authToken = "x-auth-token";
const localStorageAuthToken = "auth-token";
const slice = createSlice({
  initialState: {
    list: [],
    user: JSON.parse(localStorage.getItem(localStorageAuthToken)),
    loading: false,
    lastFetch: null,
    error: null,
  },
  name: "auth",
  reducers: {
    userRegistered: (auth, action) => {
      const token = action.headers(authToken);
      const registredUser = jwt.decode(token);
      localStorage.setItem(
        localStorageAuthToken,
        JSON.stringify(registredUser)
      );
      auth.user = registredUser;
    },

    userLoggedIn: (auth, action) => {
      const token = action.headers(authToken);
      const loggedInUser = jwt.decode(token);
      localStorage.setItem(localStorageAuthToken, JSON.stringify(loggedInUser));
      auth.user = loggedInUser;
    },
    userLoginFailed: (auth, action) => {
      auth.error = action.payload;
      localStorage.removeItem(localStorageAuthToken);
    },
    userRegistrationFailed: (auth, action) => {
      auth.error = action.payload;
      localStorage.removeItem(localStorageAuthToken);
    },
    userVerified: (auth, action) => {
      const token = action.headers(authToken);
      const loggedInUser = jwt.decode(token);
      localStorage.setItem(localStorageAuthToken, JSON.stringify(loggedInUser));
      auth.user = loggedInUser;
    },
    userVerificationFailed: (auth, action) => {
      auth.error = action.payload;
    },
  },
});
const {
  userRegistered,
  userLoggedIn,
  userLoginFailed,
  userRegistrationFailed,
  userVerified,
  userVerificationFailed,
} = slice.actions;
export default slice.reducer;

export const registerUser = (user) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      url: "/signup",
      data: user,
      method: "POST",
      onSuccess: userRegistered.type,
      onError: userRegistrationFailed.type,
    })
  );
};

export const loginUser = (user) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      url: "/login",
      data: user,
      method: "POST",
      onSuccess: userLoggedIn.type,
      onError: userLoginFailed.type,
    })
  );
};

export const verifyUser = (verificationCode) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      data: verificationCode,
      url: "/verify",
      method: "POST",
      onSuccess: userVerified.type,
      onError: userVerificationFailed.type,
    })
  );
};
