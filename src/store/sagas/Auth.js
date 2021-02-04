import { call, put, takeLatest } from "redux-saga/effects";
import * as Register from "../../network/Register/Register";
import * as Login from "../../network/Login/Login";
import * as types from "../types/Auth";
import * as ACTIONS from "../actions/Auth";


export function* registerUsersRequest(action) {  
  try {
    const response = yield call(Register.RegisterUsers,action.payload);
    yield put(ACTIONS.RegisterReceive(response));
  } catch (err) {
    console.log(err.config.headers["failed"]);
  }
}

export function* LoginUsersRequest(payload) {  
  try {
    const response = yield call(Login.LoginUsers,payload.payload);
    localStorage.setItem("token", response.data.data.access_token);
    yield put(ACTIONS.LoginReceive(response.data.data.user));
  } catch (err) {
    console.log(err.config.headers["failed"]);
  }
}


export function* getUsersSaga() {
  yield takeLatest(types.POST_AUTH_REGISTER_REQUEST, registerUsersRequest);
  yield takeLatest(types.POST_AUTH_LOGIN_REQUEST, LoginUsersRequest);
}
