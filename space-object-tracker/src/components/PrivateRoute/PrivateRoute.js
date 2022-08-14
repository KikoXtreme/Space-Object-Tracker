import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(UserContext);

    if (!isAuthenticated) {
        return <Navigate to="/users/login" replace />
    }

    return children ? children : <Outlet />
}