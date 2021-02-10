import { call, takeLatest } from "redux-saga/effects";
import { ImageUpload } from "../../network/ImageUpload";
import { UPLOAD_IMAGE_REQUEST } from "../types/ImageUpload";


export function* ImageUploadRequest(payload) {
  try {
    yield call(ImageUpload, payload.payload);
  } catch (err) {
    console.error(err);
  }
}

export function* ImageUploadSaga() {
  yield takeLatest(UPLOAD_IMAGE_REQUEST, ImageUploadRequest);
}
