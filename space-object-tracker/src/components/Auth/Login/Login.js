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
            <form className="login" onSubmit={onSubmit}>
                <div className="container">
                    <h2>Login</h2>
                    <p className="field field-icon">
                        <label htmlFor="email"><span><i className="fas fa-at"></i></span></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="kiril.valkov@yahoo.com" />
                    </p>
                    <p className="field field-icon">
                        <label htmlFor="password"><span><i className="fas fa-lock"></i></span></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*****" />
                    </p>
                    {/* <input type="submit" className="btn submit" value="Login" /> */}
                    <button type='submit'>Login</button>
                    <p className="text-center">
                        <span>Have an account? <Link to="/users/register">Register</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}