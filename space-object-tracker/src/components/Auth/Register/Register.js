import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { register } from '../../../services/authService';
import '../auth.css';

export const Register = () => {
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const [error, setError] = useState({
        username: '',
        comment: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

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
        let errorMsg = '';

        if (username.length < 3) {
          errorMsg = 'Username must be at least 3 characters long';
        } else if ( username.length > 10) {
            errorMsg = 'Username must be at max 10 characters long';
        }

        setError(state => ({
            ...state,
            errorMsg,
        }));
    }

    const validateEmail = (e) => {
        const email = e.target.value;
        let errorMsg = '';

        if (email.length < 3) {
          errorMsg = 'Username must be at least 3 characters long';
        } else if ( email.length > 10) {
            errorMsg = 'Username must be at max 10 characters long';
        }

        setError(state => ({
            ...state,
            errorMsg,
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
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            onBlur={validateUsername}
                        />
                    </p>
                    {error.errorMsg && <div className="errors">{error.errorMsg}</div>}

                    <p className="field field-icon">
                        <label htmlFor="email"><span><i className="fas fa-at"></i></span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="kiril.valkov@yahoo.com"
                            onBlur={validateEmail}
                        />
                    </p>
                    {error.errorMsg && <div className="errors">{error.errorMsg}</div>}

                    <p className="field field-icon">
                        <label htmlFor="password"><span><i className="fas fa-lock"></i></span></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*****"
                        />
                    </p>
                    <p className="field field-icon">
                        <label htmlFor="repass"><span><i className="fas fa-lock"></i></span></label>
                        <input
                            type="password"
                            name="repass"
                            id="repass"
                            placeholder="*****" />
                    </p>
                    <p className="field field-icon">
                        <label htmlFor="counry"><span><i className="fas fa-globe"></i></span></label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Bulgaria (optional?)" />
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