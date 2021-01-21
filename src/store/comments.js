import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./api";
// import moment from "moment";
const slice = createSlice({
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  name: "comments",
  reducers: {
    commentsRequested: (comments, action) => {
      comments.loading = true;
    },

    commentsReceived: (comments, action) => {
      comments.loading = false;
      comments.list = action.payload;
      comments.lastFetch = Date.now();
    },
    commentsRequestFailed: (comments, action) => {
      comments.loading = false;
    },
    commentAdded: (comments, action) => {
      comments.list.push(action.payload);
    },
  },
});
const {
  commentAdded,
  commentsRequested,
  commentsRequestFailed,
  commentsReceived,
} = slice.actions;
export default slice.reducer;

export const loadComments = () => (dispatch, getState) => {
  console.log("hello world");
  // const { lastFetch } = getState().entities.comments;
  // const difference = moment().diff(moment(lastFetch), "minutes");
  // if (difference < 10) return;

  dispatch(
    actions.apiCallBegan({
      onStart: commentsRequested.type,
      onError: commentsRequestFailed.type,
      onSuccess: commentsReceived.type,
    })
  );
};
export const addComment = (comment) => (dispatch, getState) => {
  dispatch(
    actions.apiCallBegan({
      data: comment,
      onSuccess: commentAdded.type,
    })
  );
};
