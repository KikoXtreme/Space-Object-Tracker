import { Link } from "react-router-dom";
import { login } from "../../../services/authService";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));
        console.log(email, password)

        login(email, password);
        navigate('/');
        // .then(userData)
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