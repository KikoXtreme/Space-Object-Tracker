import { get } from "./util/request"

const url = 'http://localhost:3030/users';

export const login = (email, password) => {
    get(url);
}