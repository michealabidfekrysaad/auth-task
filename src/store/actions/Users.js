import * as types from "../types/Users";

export const RegisterRequest = (payload) => ({
    type: types.GET_USERS_REQUEST,
    payload
})


export const UsersReceive = (payload) => ({
    type: types.GET_USERS_RECEIVE,
    payload
})
