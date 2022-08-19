import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { login } from "../../../services/authService";

export const Login = () => {
    const { userLogin } = useContext(UserContext)
    const navigate = useNavigate();

    const [error, setError] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
            username,
            country
        } = Object.fromEntries(new FormData(e.target));
        console.log(email, password, username, country)

        login(email, password, username, country)
            .then(userData => {
                userLogin(userData);
                navigate('/');
                console.log(userData);
            })
            .catch(() => {
                navigate('/NotFound');
            })
    }

    const validateEmail = (e) => {
        const email = e.target.value;
        let errorEmailMsg = '';

        if (!/.{3,}@(gmail|yahoo|abv)\.(bg|com)$/.test(email)) {
            errorEmailMsg = 'Please enter valid email';
        }

        setError(state => ({
            ...state,
            errorEmailMsg,
        }));
    }

    const validatePassword = (e) => {
        const password = e.target.value;
        let errorPassMsg = '';

        if (password.length < 3) {
            errorPassMsg = 'Password must be at least 3 characters long';
        }

        setError(state => ({
            ...state,
            errorPassMsg,
        }));
    }

    return (
        <section id="login-page" className="auth">
            <form className="login" onSubmit={onSubmit}>
                <div className="container">
                    <h2>Login</h2>
                    <p className="field field-icon">
                        <label htmlFor="email"><span><i className="fas fa-at"></i></span></label>
                        <input
                            className={error.errorEmailMsg ? "input-error" : null}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="kiril.valkov@yahoo.com"
                            onBlur={validateEmail}
                        />
                    </p>
                    {error.errorEmailMsg && <div className="errors">{error.errorEmailMsg}</div>}

                    <p className="field field-icon">
                        <label htmlFor="password"><span><i className="fas fa-lock"></i></span></label>
                        <input
                            className={error.errorPassMsg ? "input-error" : null}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*****"
                            onBlur={validatePassword}
                        />
                    </p>
                    {error.errorPassMsg && <div className="errors">{error.errorPassMsg}</div>}

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