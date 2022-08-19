import { post } from "./util/request"

const url = 'http://localhost:3030/users';

export const login = (email, password, username, country) => post(`${url}/login`, { email, password, username, country });
export const register = (email, password, username, country) => post(`${url}/register`, { email, password, username, country });

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