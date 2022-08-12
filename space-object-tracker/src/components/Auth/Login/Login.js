import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { login } from "../../../services/authService";

export const Login = () => {
    const { userLogin } = useContext(UserContext)
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));
        console.log(email, password)

        login(email, password)
            .then(userData => {
                userLogin(userData);
                navigate('/');
                console.log(userData);
            })
            .catch(() => {
                navigate('/NotFound');
            })
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="kiko@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        placeholder="*****"
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <Link to="/users/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}