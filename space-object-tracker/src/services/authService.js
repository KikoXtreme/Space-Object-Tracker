import { post } from "./util/request"

const url = 'http://localhost:3030/users';

export const login = (email, password) => post(`${url}/login`, { email, password });
export const register = (email, password) => post(`${url}/register`, { email, password });
export const logout = async (accessToken) => {
    try {
        const res = await fetch(`${url}/logout`, {
            headers: {
                'X-Authorization': accessToken,
            },
        })

        return res;
    } catch (error) {
        console.log(error);
    }
}