import { post } from "./util/request"

const url = 'http://localhost:3030/users';

export const login = (email, password) => {
    post(`${url}/login`, { email, password });
}

export const register = (email, password) => {
    post(`${url}/register`, {email, password});
}