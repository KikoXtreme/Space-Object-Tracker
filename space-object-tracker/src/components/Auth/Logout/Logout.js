import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import { logout } from "../../../services/authService"

export const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(UserContext);

    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            })
    })

    return null;
}