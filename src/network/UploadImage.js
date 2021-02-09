import { axiosInstance } from "./index";

export const UploadImage = async (data) => {
    return await axiosInstance.post(`api/v1/users/upload-image`, data, {
        handlerEnabled: true,
      })
  };
  