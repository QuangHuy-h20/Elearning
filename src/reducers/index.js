import { combineReducers } from "redux";
import courses from "./courses";
const rootReducer = combineReducers({
  //Nơi khai báo các reducer con
  courses,
});

export default rootReducer;
