import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    storeProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { storeProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
