import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as actions from "./api";
import diff from "./utils/diff";
const url = "/categories";
const slice = createSlice({
  name: "categories",
  initialState: {
    list: [
      {
        id: "1",
        name: "Culture",
      },
      {
        id: "2",
        name: "Politique",
      },
      {
        id: "3",
        name: "Agriculture",
      },
      {
        id: "4",
        name: "Enseignement",
      },
      {
        id: "5",
        name: "Culture",
      },
      {
        id: "6",
        name: "Culture",
      },
      {
        id: "7",
        name: "Culture",
      },
      {
        id: "8",
        name: "Innovation",
      },
    ],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    categoriesRequested: (categories, action) => {
      categories.loading = true;
    },

    categoriesReceived: (categories, action) => {
      categories.loading = false;
      categories.list = action.payload;
      categories.lastFetch = Date.now();
    },
    categoriesRequestFailed: (categories, action) => {
      toast.error(
        action.payload ||
          "Impossible de charger les categories, Veuillez vérifier votre connexion internet."
      );
      categories.loading = false;
    },
    categoryAdded: (categories, action) => {
      categories.list.push(action.payload);
    },
    categoryDeleted: (categories, action) => {
      const newcategories = categories.list.filter(
        (category) => category._id !== action.payload._id
      );
      categories.list = newcategories;
    },
    categoryEdited: (categories, action) => {
      const newcategories = categories.list.map((category) =>
        category._id === action.payload._id ? action.payload : category
      );
      categories.list = newcategories;
    },
  },
});
const {
  categoryAdded,
  categoriesRequested,
  categoriesRequestFailed,
  categoriesReceived,
  categoryDeleted,
} = slice.actions;
export default slice.reducer;

export const loadCategories = (data) => (dispatch, getState) => {
  const { lastFetch } = getState().entities.categories;
  const difference = diff(lastFetch);
  if (difference < 10) return;
  dispatch(
    actions.apiCallBegan({
      onStart: categoriesRequested.type,
      onError: categoriesRequestFailed.type,
      onSuccess: categoriesReceived.type,
      method: "GET",
    })
  );
};
export const addcategory = (category) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      onSuccess: categoryAdded.type,
      method: "POST",
      data: category,
      url,
    })
  );
};

export const deletecategory = (category) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      onSuccess: categoryDeleted.type,
      method: "DELETE",
      url: `${url}/${category.id}`,
    })
  );
};

export const editcategory = (category) => (dispatch) => {
  dispatch(
    actions.apiCallBegan({
      onSuccess: categoryDeleted.type,
      method: "PUT",
      url: `${url}/${category.id}`,
    })
  );
};
