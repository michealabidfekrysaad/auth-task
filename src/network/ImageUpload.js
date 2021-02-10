import { axiosInstance } from "./index";

export const ImageUpload = async (data) => {
    return await axiosInstance.post(`v1/users/upload-image`, data, {
        handlerEnabled: true,
      })
  };
  