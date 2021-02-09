import { axiosInstance } from "./index";

export const RegisterUsers = async (data) => {
  return await axiosInstance.post(`api/v1/users/`, data, {
    handlerEnabled: true,
  });
};
