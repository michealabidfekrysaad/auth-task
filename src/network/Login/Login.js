import { axiosInstance } from "../index";

export const LoginUsers = async (data) => {
  return await axiosInstance.post(`/api/v1/users/login`,data.values, { handlerEnabled: true });
};
