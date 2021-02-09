import { all } from "redux-saga/effects";

import { getUsersSaga } from "./Auth";
import { ImageUploadSaga } from "./ImageUpload";

export function* watchSagas() {
  yield all([getUsersSaga(), ImageUploadSaga()]);
}
