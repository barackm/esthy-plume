import { createSlice } from "@reduxjs/toolkit";
import diff from "./utils/diff";

const slice = createSlice({
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  name: "users",
  reducers: {
    usersRequested: (users, action) => {
      users.loading = true;
    },
    usersLoaded: (users, action) => {
      users.list = action.payload;
    },
    usersRequestFailed: (users, action) => {
      users.loading = false;
    },
    userDeleted: (users, action) => {
      const newUsers = users.list.filter(
        (user) => user._id !== action.payload._id
      );
      users.list = newUsers;
    },
  },
});

const {} = slice.actions;
export default slice.reducer;

export const loadUsers = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.categories;
  const difference = diff(lastFetch);
  if (difference < 10) return;
};
