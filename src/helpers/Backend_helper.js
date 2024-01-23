
import { SERVER_URL } from "./configuration"
import { del, get, post, put } from "./Api_helper"
const BASE_URL = `${SERVER_URL}/api`


const userRegisteration = payload => post(`${BASE_URL}/user/register`, payload)
const userLogin = payload => post(`${BASE_URL}/user/login`, payload)
const userUpdate = payload => put(`${BASE_URL}/user/edit`, payload)
const getUser = payload => get(`${BASE_URL}/user/getuser`, payload)
const userLogout = payload => get(`${BASE_URL}/user/logout`, payload)

export {
    userRegisteration,
    userLogin,
    userUpdate,
    getUser,
    userLogout
}