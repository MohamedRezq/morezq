import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  blogs: [],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    storeBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const { storeBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
