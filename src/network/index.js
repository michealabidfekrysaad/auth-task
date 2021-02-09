import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./Interceptors";
import { baseURL, authorizeBearer } from "../utils/Constants";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    // "Content-Type": "image/png"
    "Content-Type": "application/json",
    "Authorization": authorizeBearer,
    "Accept-Language": "en",
    "X-Api-Key": "boilerplate_react",
  },
});

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
