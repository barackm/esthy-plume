import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  name: "messages",
  reducers: {},
});

export default slice.reducer;
