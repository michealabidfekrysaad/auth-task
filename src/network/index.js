import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./Interceptors";
import { baseURL } from "../utils/Constants";
const token = localStorage.getItem("token");

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: token && `Bearer ${token}`,
    "Accept-Language": "en",
    "X-Api-Key": "boilerplate_react",
  },
});

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
