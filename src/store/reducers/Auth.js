import * as types from "../types/Auth";

const INITIAL_SATE = {};

export const AuthReducer = (state = INITIAL_SATE, action) => {

  switch (action.type) {
    case types.POST_AUTH_REGISTER_RECEIVE:
      return action.payload;
    case types.POST_AUTH_LOGIN_RECEIVE:
      return action.payload;
    default:
      return state;
  }
};

export default AuthReducer;
