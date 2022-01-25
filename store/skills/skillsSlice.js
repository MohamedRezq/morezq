import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  skills: [],
  databaseSkills: [],
  stylingSkills: [],
  frameworkSkills: [],
  commSkills: [],
  backSkills: [],
  miscSkills: [],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    storeSkills: (state, action) => {
      action.payload.map((skill, i) => {
        state.skills.push(skill);
        skill.node.categories.map((cat, j) => {
          switch (cat.tag[0].text) {
            case "database":
              state.databaseSkills.push(skill);
              break;
            case "styling":
              state.stylingSkills.push(skill);
              break;
            case "framework":
              state.frameworkSkills.push(skill);
              break;
            case "comm":
              state.commSkills.push(skill);
              break;
            case "back":
              state.backSkills.push(skill);
              break;
            case "misc":
              state.miscSkills.push(skill);
              break;
            default:
              break;
          }
        });
      });
    },
  },
});

export const { storeSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
