import * as types from "../types/Users";

export const RegisterRequest = (payload) => ({
    type: types.GET_USERS_REGISTER_REQUEST,
    payload
})


export const RegisterReceive = (payload) => ({
    type: types.GET_USERS_REGISTER_RECEIVE,
    payload
})


export const LoginRequest = (payload) => ({
    type: types.GET_USERS_LOGIN_REQUEST,
    payload
})


export const LoginReceive = (payload) => ({
    type: types.GET_USERS_LOGIN_RECEIVE,
    payload
})