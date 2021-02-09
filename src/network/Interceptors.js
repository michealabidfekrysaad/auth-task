import store from "../store/index";
import { loader } from "../store/actions/Loader";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    store.dispatch(loader(true));
  }
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    store.dispatch(loader(false));
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    // error.config.headers["failed"] = "network-error";
    // kont bagarab azawed  headers mn el request
    // 7aleyan heya malhash lazma
    store.dispatch(loader(false));
  }
  return Promise.reject({ ...error });
};
