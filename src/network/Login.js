import { axiosInstance } from "./index";
import * as headers from "../utils/Constants";

export const LoginUsers = async (data) => {
  const client_id = headers.client_id;
  const client_secret = headers.client_secret;
  return await axiosInstance.post(
    `v1/users/login`,
    { ...data, client_id, client_secret },
    { handlerEnabled: true }
  );
};
