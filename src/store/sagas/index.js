import { all } from "redux-saga/effects";

import { getUsersSaga } from "./Auth";

export function* watchSagas() {
  yield all([getUsersSaga()]);
}
