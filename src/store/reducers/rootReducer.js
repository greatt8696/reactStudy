import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import layoutReducer from "./layoutReducer";

const rootReducer = combineReducers({
  user: userReducer,
  layout: layoutReducer,
});

export default rootReducer;
