import { combineReducers } from "redux";
import skills from "./skills/skillsSlice";

const reducers = combineReducers({
  skills,
});

export default reducers;
