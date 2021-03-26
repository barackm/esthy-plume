import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as actions from "./api";
import diff from "./utils/diff";
const url = "/comments";
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
      toast.error(
        action.payload ||
          "Impossible de charger les commentaires, Veuillez vérifier votre connexion internet."
      );
      comments.loading = false;
    },
    commentAdded: (comments, action) => {
      comments.list.push(action.payload);
    },
    commentDeleted: (comments, action) => {
      const newComments = comments.list.filter(
        (comment) => comment._id !== action.payload._id
      );
      comments.list = newComments;
    },
    commentEdited: (comments, action) => {
      const newComments = comments.list.map((comment) =>
        comment._id === action.payload._id ? action.payload : comment
      );
      comments.list = newComments;
    },
  },
});
const {
  commentAdded,
  commentsRequested,
  commentsRequestFailed,
  commentsReceived,
  commentDeleted,
} = slice.actions;
export default slice.reducer;

export const loadComments = (data) => (dispatch, getState) => {
  const { lastFetch } = getState().entities.comments;
  const difference = diff(lastFetch);
  if (difference < 10) return;
  dispatch(
    actions.apiCallBegan({
      onStart: commentsRequested.type,
      onError: commentsRequestFailed.type,
      onSuccess: commentsReceived.type,
      method: "GET",
    })
  );
};
export const addComment = (comment) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      onSuccess: commentAdded.type,
      method: "POST",
      data: comment,
      url,
    })
  );
};

export const deleteComment = (comment) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      onSuccess: commentDeleted.type,
      method: "DELETE",
      url: `${url}/${comment.id}`,
    })
  );
};

export const editComment = (comment) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      onSuccess: commentDeleted.type,
      method: "PUT",
      url: `${url}/${comment.id}`,
    })
  );
};
