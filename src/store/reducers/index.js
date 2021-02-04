import { combineReducers } from "redux";

import AuthReducer from "./Auth";
import { loader } from "./Loader";

export default combineReducers({
  AuthReducer,
  loader,
});
