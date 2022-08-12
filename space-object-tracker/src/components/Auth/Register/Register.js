import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { register } from '../../../services/authService';

export const Register = () => {
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        
        const email = formData.get('email');
        const password = formData.get('password');
        const repass = formData.get('confirm-password');

        if (password !== repass) {
            return;
        }

        register(email, password)
            .then(userData => {
                userLogin(userData);
                navigate('/');
            })
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password" />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password" />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <Link to="/users/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}