import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./api";
const slice = createSlice({
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  name: "comments",
  reducers: {
    commentAdded: (comments, action) => {
      comments.list.push(action.payload);
    },
  },
});
const { commentAdded } = slice.actions;
export default slice.reducer;

export const addComment = () => (comment) => {
  actions.apiCallBegan({
    data: comment,
  });
};
