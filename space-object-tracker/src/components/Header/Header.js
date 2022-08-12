import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import styles from './Header.module.css';

export const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <header>
            <nav>
                <h1>Space Object Tracker</h1>
                {user.email && <span>{user.email}</span>}
                <Link to="/objects">All Objects</Link>
                {user.email
                    ? <div id="user">
                        <Link to="/create">Add Object</Link>
                        <Link to="/users/logout">Logout</Link>
                    </div>
                    : <div id="guest">
                        <Link to="/users/login">Login</Link>
                        <Link to="/users/register">Register</Link>
                    </div>
                }
            </nav>
        </header>
        // <header>
        //     <div className="mini-navbar-wrap">
        //         <div className={styles['logo-wrap']}>
        //             <p>
        //                 <Link to="/">
        //                     Space Object Tracker
        //                 </Link>
        //             </p>
        //         </div>
        //         <div className="mini-navbar">
        //             <ul>
        //                 <li> <Link to="/users/login">Login</Link></li>
        //                 <li> <Link to="/users/register">Register</Link></li>
        //             </ul>
        //         </div>
        //         <div className="mini-navbar">
        //             <ul>
        //                 <li> <Link to="/users/profile">KIKO's Profile</Link></li>
        //                 <li> <Link to="/users/logout">Logout</Link></li>
        //             </ul>
        //         </div>
        //     </div>
        //     <nav className="nav">
        //         <ul>
        //             <li><Link to="/">Home</Link></li>
        //             <li><Link to="/about">About</Link> </li>
        //             <li><Link to="/objects">Objects</Link></li>
        //             <li><Link to="/objects/create">New Discovery</Link></li>
        //             <li><Link to="/objects/search">Search for an Object</Link></li>
        //             <li><Link to="/objects/latest">Latest Discoveries</Link></li>
        //             <li><p className="notification">ERROR MESSAGE</p></li>
        //         </ul>
        //     </nav>
        // </header>
    );
}