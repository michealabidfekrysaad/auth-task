import * as types from "../types/Users";

const INITIAL_SATE = {};


export const UsersReducer = (state = INITIAL_SATE, action) => {
  
  switch (action.type) {
    case types.GET_USERS_RECEIVE:
      return action.payload;
    default:
      return state;
  }
};

export default UsersReducer;
