import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useLocalStorage('user', {});

    const userLogin = (userData) => {
        setUser(userData);
    }

    const userLogout = () => {
        setUser({});
    }
    return (
        <UserContext.Provider value={{ user, userLogin, userLogout, isAuthenticated: !!user.accessToken }}>
            {children}
        </UserContext.Provider>
    );
}