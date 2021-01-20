import { createSlice } from "@reduxjs/toolkit";

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
    articlesReceived: () => {},
  },
});

// const { articlesReceived } = slice.actions;

export default slice.reducer;
