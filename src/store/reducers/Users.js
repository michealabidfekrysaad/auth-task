import * as types from "../types/Users";

const INITIAL_SATE = {};


export const UsersReducer = (state = INITIAL_SATE, action) => {
  
  switch (action.type) {
    case types.GET_USERS_REGISTER_RECEIVE:
      return action.payload;
      case types.GET_USERS_LOGIN_RECEIVE:
        return action.payload;
    default:
      return state;
  }
};

export default UsersReducer;
