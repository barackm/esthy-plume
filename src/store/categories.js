import { createSlice } from "@reduxjs/toolkit";

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
  },
  reducers: {},
});

export default slice.reducer;
