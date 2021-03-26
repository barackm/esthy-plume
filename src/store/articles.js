import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as actions from "./api";
import diff from "./utils/diff";
const url = "/articles";
const slice = createSlice({
  initialState: {
    list: [
      {
        id: 1,
        title: "barack",
        body: "",
        authorId: 1,
        createdAt: "Mars 22, 2021",
      },
      {
        id: 2,
        title: "lorem lorem",
        body: "",
        authorId: 2,
        createdAt: "Mars 22, 2021",
      },
      {
        id: 3,
        title: "lorem lorem",
        body: "",
        authorId: 1,
        createdAt: "Mars 22, 2021",
      },
      {
        id: 4,
        title: "lorem lorem",
        body: "",
        authorId: 1,
        createdAt: "Mars 22, 2021",
      },
      {
        id: 5,
        title: "lorem lorem",
        body: "",
        authorId: 2,
        createdAt: "Mars 22, 2021",
      },
      {
        id: 6,
        title: "lorem lorem",
        body: "",
        authorId: 2,
        createdAt: "Mars 22, 2021",
      },
      {
        id: 7,
        title: "lorem lorem",
        body: "",
        authorId: 1,
        createdAt: "Mars 22, 2021",
      },
    ],
    loading: false,
    lastFetch: null,
  },
  name: "articles",
  reducers: {
    articlesRequested: (articles, action) => {},
    articlesReceived: (acrticles, action) => {},
    articlesRequestFailed: (articles, action) => {
      toast.error(
        "Impossible de charger les articles. veuillez verifier votre connexion internet."
      );
    },
    articleAdded: (articles, action) => {},
    articleDeleted: (articles, action) => {},
    articleModified: (articles, action) => {},
  },
});

const {
  articlesRequested,
  articlesRequestFailed,
  articleModified,
  articleAdded,
  articleDeleted,
  articlesReceived,
} = slice.actions;

export default slice.reducer;

export const loadArticles = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.articles;
  const difference = diff(lastFetch);
  if (difference < 10) return;
  dispatch(
    actions.apiCallBegan({
      url,
      method: "GET",
      onError: articlesRequestFailed.type,
      onSuccess: articlesReceived.type,
      onStart: articlesRequested.type,
    })
  );
};

export const addArticle = (article) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      url,
      method: "POST",
      data: article,
      onSuccess: articleAdded.type,
    })
  );
};

export const modifyArticle = (article) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      url: `${url}/${article._id}`,
      method: "PUT",
      data: article,
      onSuccess: articleModified.type,
    })
  );
};

export const deleteArticle = (articleId) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      url: `${url}/${articleId}`,
      method: "DELETE",
      onSuccess: articleDeleted.type,
    })
  );
};
