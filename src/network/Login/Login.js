import { axiosInstance } from "../index";

export const LoginUsers = async (data) => {
  let client_id = "2";
  let client_secret = "fhMZQxfVREJrII50IeN4ThIZCerdOFjxiRGu7Lc0";  
  return await axiosInstance.post(
    `api/v1/users/login`,
    { ...data, client_id, client_secret },
    { handlerEnabled: true }
  );
};
