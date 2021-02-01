import { combineReducers } from "redux";

import UsersReducer from "./Users";
import { loader } from "./Loader";

export default combineReducers({
  UsersReducer,
  loader,
});
