import { call, put, takeLatest } from "redux-saga/effects";
import * as Register from "../../network/Register/Register";
import * as Login from "../../network/Login/Login";
import * as types from "../types/Users";
import * as ACTIONS from "../actions/Users";


export function* registerUsersRequest(payload) {  
  try {
    const response = yield call(Register.RegisterUsers,payload.payload);
    yield put(ACTIONS.RegisterReceive(response));
  } catch (err) {
    console.log(err.config.headers["failed"]);
  }
}

export function* LoginUsersRequest(payload) {  
  try {
    const response = yield call(Login.LoginUsers,payload.payload);
    yield put(ACTIONS.LoginReceive(response));
  } catch (err) {
    console.log(err.config.headers["failed"]);
  }
}


export function* getUsersSaga() {
  yield takeLatest(types.GET_USERS_REGISTER_REQUEST, registerUsersRequest);
  yield takeLatest(types.GET_USERS_LOGIN_REQUEST, LoginUsersRequest);
}
