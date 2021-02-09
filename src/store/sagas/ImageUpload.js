import { call, takeLatest } from "redux-saga/effects";
import { UploadImage } from "../../network/UploadImage";
import { UPLOAD_IMAGE_REQUEST } from "../types/ImageUpload";


export function* ImageUploadRequest(payload) {
  try {
    yield call(UploadImage, payload.payload);
  } catch (err) {
    console.error(err);
  }
}

export function* ImageUploadSaga() {
  yield takeLatest(UPLOAD_IMAGE_REQUEST, ImageUploadRequest);
}
