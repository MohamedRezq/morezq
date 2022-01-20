import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  skills: [],
};


const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    storeSkills: (state, action) => {
      state.skills = action.payload;
    }
  },
});

export const {storeSkills} = skillsSlice.actions;
export default skillsSlice.reducer;
