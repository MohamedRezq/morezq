import { combineReducers } from "redux";
import skills from "./skills/skillsSlice";
import blogs from "./blogs/blogsSlice";
import projects from "./projects/projectsSlice";

const reducers = combineReducers({
  skills,
  blogs,
  projects,
});

export default reducers;
