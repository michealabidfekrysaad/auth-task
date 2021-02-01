import { all } from "redux-saga/effects";

import { getUsersSaga } from "./Users";

export function* watchSagas() {
  yield all([getUsersSaga()]);
}
