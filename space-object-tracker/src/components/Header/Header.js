import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import styles from './Header.module.css';

export const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <header>
            <div className="mini-navbar-wrap">
                <div className={styles['logo-wrap']}>
                    <Link to="/">Space Object Tracker</Link>
                </div>
                {user.email && <span>{user.email}</span>}
                {user.email
                    ? <div className="mini-navbar">
                        <ul>
                            <li> <Link to="/users/profile">{user.email}'s Profile</Link></li>
                            <li> <Link to="/users/logout">Logout</Link></li>
                        </ul>
                    </div>
                    : <div className="mini-navbar">
                        <ul>
                            <li> <Link to="/users/login">Login</Link></li>
                            <li> <Link to="/users/register">Register</Link></li>
                        </ul>
                    </div>
                }
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link> </li>
                    <li><Link to="/objects">Objects</Link></li>
                    <li><Link to="/objects/create">New Discovery</Link></li>
                    <li><Link to="/objects/search">Search for an Object</Link></li>
                    <li><Link to="/objects/latest">Latest Discoveries</Link></li>
                    <li><p className="notification">ERROR MESSAGE??</p></li>
                </ul>
            </nav>
        </header>
    );
}