import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { register } from '../../../services/authService';
import '../auth.css';

export const Register = () => {
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const [error, setError] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();

        // const userData = Object.fromEntries(new FormData(e.target));
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const repass = formData.get('repass');
        const username = formData.get('username');
        const country = formData.get('country');

        if (password !== repass) {
            return;
        }

        register(email, password, username, country)
            .then(userData => {
                userLogin(userData);
                navigate('/');
            })
    }

    const validateUsername = (e) => {
        const username = e.target.value;
        let errorUserMsg = '';

        if (username.length < 3) {
            errorUserMsg = 'Username must be at least 3 characters long';
        } else if (username.length > 10) {
            errorUserMsg = 'Username must be at max 10 characters long';
        }

        setError(state => ({
            ...state,
            errorUserMsg,
        }));
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

    const validateRepass = (e) => {
        let errorRepassMsg = '';

        const formData = new FormData(e.target.parentElement.parentElement.parentElement);
        const password = formData.get('password');
        const repass = formData.get('repass');

        if (password !== repass) {
            errorRepassMsg = 'Password don\'t match!';
        }

        setError(state => ({
            ...state,
            errorRepassMsg,
        }));
    }

    return (
        <section id="register-page">
            <form className="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <p className="field field-icon">
                        <label htmlFor="username"><span><i className="fas fa-user-astronaut"></i></span></label>
                        <input
                            className={error.errorUserMsg ? "input-error" : null}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            onBlur={validateUsername}
                        />
                    </p>
                    {error.errorUserMsg && <div className="errors">{error.errorUserMsg}</div>}

                    <p className="field field-icon">
                        <label htmlFor="email"><span><i className="fas fa-at"></i></span></label>
                        <input
                            className={error.errorEmailMsg ? "input-error" : null}
                            type="email"
                            id="email"
                            name="email"
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

                    <p className="field field-icon">
                        <label htmlFor="repass"><span><i className="fas fa-lock"></i></span></label>
                        <input
                            className={error.errorRepassMsg ? "input-error" : null}
                            type="password"
                            name="repass"
                            id="repass"
                            placeholder="*****"
                            onBlur={validateRepass} />
                    </p>
                    {error.errorRepassMsg && <div className="errors">{error.errorRepassMsg}</div>}

                    <p className="field field-icon">
                        <label htmlFor="counry"><span><i className="fas fa-globe"></i></span></label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Bulgaria (optional)" />
                    </p>
                    {/* <input className="btn submit" type="submit" defaultValue="Register" /> */}
                    <button type='submit'>Create Account</button>
                    <p className="text-center">
                        <span>Already registered? <Link to="/users/login">Log In</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}