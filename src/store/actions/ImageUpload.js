import {UPLOAD_IMAGE_REQUEST} from "../types/ImageUpload";

export const ImageUpload = (payload) => ({
    type: UPLOAD_IMAGE_REQUEST,
    payload
})