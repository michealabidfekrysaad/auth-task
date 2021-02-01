import store from "../store/index";

export const isLogin = () => {
  let { UsersReducer } = store.getState();

  return UsersReducer.status === 200 && UsersReducer.statusText === "OK"
    ? true
    : false;
};
